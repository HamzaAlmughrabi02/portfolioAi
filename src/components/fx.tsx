import { useEffect, useLayoutEffect, useRef, type ReactNode, type RefObject } from 'react';
import { motion, useMotionValue, useScroll, useSpring } from 'motion/react';

type MainRef = RefObject<HTMLElement | null>;
const EASE = [0.22, 0.8, 0.3, 1] as const;

/** One controller feeds the pointer light, follower, parallax and panel spotlight. */
export function MotionAtmosphere({ mainRef, disabled }: { mainRef: MainRef; disabled: boolean }) {
  const shell = useRef<HTMLDivElement>(null);
  const targetX = useMotionValue(-500);
  const targetY = useMotionValue(-500);
  const pointerX = useSpring(targetX, { stiffness: 1200, damping: 42, mass: 0.12 });
  const pointerY = useSpring(targetY, { stiffness: 1200, damping: 42, mass: 0.12 });
  const driftX = useSpring(0, { stiffness: 45, damping: 26 });
  const driftY = useSpring(0, { stiffness: 45, damping: 26 });
  const { scrollYProgress } = useScroll({ container: mainRef });

  useEffect(() => {
    const layer = shell.current;
    if (!layer || disabled) return;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    let frame = 0;
    let activePanel: HTMLElement | null = null;
    let shown = false;
    const resetPanel = () => {
      activePanel?.style.removeProperty('--mx');
      activePanel?.style.removeProperty('--my');
      activePanel = null;
    };
    const hide = () => {
      cancelAnimationFrame(frame);
      shown = false;
      layer.dataset.pointer = 'hidden';
      layer.dataset.hover = 'false';
      driftX.set(0); driftY.set(0);
      resetPanel();
    };
    const move = (event: PointerEvent) => {
      if (!fine.matches || event.pointerType !== 'mouse') return;
      // Feed position immediately; only geometry and lighting wait for a frame.
      targetX.set(event.clientX); targetY.set(event.clientY);
      if (!shown) {
        pointerX.jump(event.clientX); pointerY.jump(event.clientY); shown = true;
      }
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const target = event.target instanceof Element ? event.target : null;
        const editable = !!target?.closest('input, textarea, select, [contenteditable="true"]');
        layer.dataset.pointer = editable ? 'hidden' : 'visible';
        layer.dataset.hover = target?.closest('a, button, summary') ? 'true' : 'false';
        driftX.set((event.clientX / window.innerWidth - 0.5) * 24);
        driftY.set((event.clientY / window.innerHeight - 0.5) * 18);
        const panel = target?.closest<HTMLElement>('.glass-panel') ?? null;
        if (panel !== activePanel) resetPanel();
        activePanel = panel;
        if (panel) {
          const rect = panel.getBoundingClientRect();
          panel.style.setProperty('--mx', `${event.clientX - rect.left}px`);
          panel.style.setProperty('--my', `${event.clientY - rect.top}px`);
        }
      });
    };
    const visibility = () => {
      layer.dataset.suspended = String(document.hidden);
      const app = layer.closest<HTMLElement>('.app-shell');
      if (app) app.dataset.motionSuspended = String(document.hidden);
      if (document.hidden) hide();
    };
    const preference = () => { if (!fine.matches) hide(); };
    visibility();
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('blur', hide);
    document.documentElement.addEventListener('pointerleave', hide);
    document.addEventListener('visibilitychange', visibility);
    fine.addEventListener('change', preference);
    return () => {
      hide();
      window.removeEventListener('pointermove', move);
      window.removeEventListener('blur', hide);
      document.documentElement.removeEventListener('pointerleave', hide);
      document.removeEventListener('visibilitychange', visibility);
      fine.removeEventListener('change', preference);
    };
  }, [disabled, targetX, targetY, pointerX, pointerY, driftX, driftY]);

  return <div ref={shell} className="motion-environment" data-disabled={disabled} data-pointer="hidden" aria-hidden="true">
    <div className="ambient-field">
      <div className="ambient-bloom bloom-one"/><div className="ambient-bloom bloom-two"/>
      <motion.div className="ambient-map" style={{ x: disabled ? 0 : driftX, y: disabled ? 0 : driftY }}>
        <svg className="ambient-network" viewBox="0 0 1440 1000" preserveAspectRatio="xMidYMid slice" fill="none">
          <g className="network-structure"><path d="M0 240h160l130 130h180l170-170h210l150 150h440M0 760h230l180-180h200l170 170h250l160-160h250M1050 0v150l-130 130v200l150 150v370M450 0v140L300 290v310L120 780v220"/></g>
          <g className="network-signals"><path d="M0 240h160l130 130h180l170-170h210l150 150h440"/><path d="M0 760h230l180-180h200l170 170h250l160-160h250"/><path d="M1050 0v150l-130 130v200l150 150v370"/></g>
          <g className="network-nodes">{[[160,240],[290,370],[470,370],[640,200],[850,200],[1000,350],[230,760],[410,580],[610,580],[780,750],[1030,750],[1190,590],[1050,150],[920,480],[1070,630],[300,600]].map(([cx,cy],i) => <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 3 : 2} style={{animationDelay:`${i * -0.55}s`}}/>)}</g>
        </svg>
      </motion.div>
      <div className="ambient-vignette"/>
    </div>
    <motion.div className="pointer-aura" style={{ x: pointerX, y: pointerY }}><span/></motion.div>
    <motion.div className="pointer-follower" style={{ x: pointerX, y: pointerY }}><span className="pointer-ring"/><span className="pointer-core"/></motion.div>
    <motion.div className="reading-progress" style={{ scaleX: scrollYProgress }}/>
  </div>;
}

/** One route transition; only content starting below the fold gets a later reveal. */
export function PageTransition({ children, mainRef, disabled, page, direction }: { key?: string; children: ReactNode; mainRef: MainRef; disabled: boolean; page: string; direction: number }) {
  const content = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => { mainRef.current?.scrollTo({ top: 0, behavior: 'instant' }); }, [mainRef]);
  useLayoutEffect(() => {
    const root = content.current;
    const scroller = mainRef.current;
    if (!root || !scroller || disabled) return;
    const selectors = '.hero-topline, .hero-copy > *, .portrait-zone, .home-bottom, .section-title > *, .project-filters, .project-toolbar, .directory-heading, .directory-group, .skill-block, .process-strip, .education-card, .subsection-title, .cert-list > article, .learning-notes, .contact-main, .contact-aside > *';
    const viewportBottom = scroller.getBoundingClientRect().bottom;
    const elements = [...root.querySelectorAll<HTMLElement>(selectors)].filter(element => element.getBoundingClientRect().top >= viewportBottom);
    const running = new Set<Animation>();
    const restore = (element: HTMLElement) => {
      element.style.removeProperty('opacity');
      element.style.removeProperty('transform');
    };
    // Prepare off-screen elements before paint; visible content belongs to the route animation.
    for (const element of elements) {
      element.style.opacity = '0';
      element.style.transform = 'translate3d(0, 14px, 0)';
    }
    const observer = new IntersectionObserver(entries => {
      let stagger = 0;
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        observer.unobserve(element);
        const animation = element.animate([
          { opacity: 0, transform: 'translate3d(0, 14px, 0)' },
          { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        ], { duration: 480, delay: Math.min(stagger++ * 45, 135), easing: 'cubic-bezier(.22,.8,.3,1)', fill: 'both' });
        running.add(animation);
        animation.onfinish = () => { restore(element); animation.cancel(); running.delete(animation); };
      }
    }, { root: scroller, threshold: 0.05, rootMargin: '0px 0px 20px 0px' });
    elements.forEach(element => observer.observe(element));
    return () => { observer.disconnect(); running.forEach(animation => animation.cancel()); elements.forEach(restore); };
  }, [mainRef, disabled]);
  const profile = page === 'projects' ? { x: 18 * direction, y: 0 }
    : page === 'skills' ? { x: 0, y: 16 }
    : page === 'education' ? { x: -14 * direction, y: 0 }
    : page === 'contact' ? { x: 0, y: -12 }
    : { x: 0, y: 0 };
  return <motion.div ref={content} className="page-content" data-page={page}
    initial={{ opacity: disabled ? 1 : 0, x: disabled ? 0 : profile.x, y: disabled ? 0 : profile.y }}
    animate={{ opacity: 1, x: 0, y: 0, transition: { duration: disabled ? 0 : 0.56, ease: EASE } }}
    exit={{ opacity: 0, transition: { duration: disabled ? 0 : 0.18, ease: [0.4, 0, 1, 1] } }}>
    {children}
  </motion.div>;
}
