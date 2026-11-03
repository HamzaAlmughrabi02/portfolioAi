import { useEffect } from 'react';

/** Soft light follows a mouse only; touch and reduced motion retain a static surface. */
export function useGlobalSpotlight() {
  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let frame = 0;
    let active: HTMLElement | null = null;
    const clear = () => { active?.style.removeProperty('--mx'); active?.style.removeProperty('--my'); active = null; };
    const move = (event: PointerEvent) => {
      if (!media.matches || event.pointerType !== 'mouse') return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const target = event.target instanceof Element ? event.target.closest<HTMLElement>('.glass-panel') : null;
        if (target !== active) clear();
        active = target;
        if (!active) return;
        const rect = active.getBoundingClientRect();
        active.style.setProperty('--mx', `${event.clientX - rect.left}px`);
        active.style.setProperty('--my', `${event.clientY - rect.top}px`);
      });
    };
    const changed = () => { if(!media.matches) clear(); };
    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', clear);
    media.addEventListener('change', changed);
    return () => { cancelAnimationFrame(frame); clear(); window.removeEventListener('pointermove', move); document.removeEventListener('pointerleave', clear); media.removeEventListener('change', changed); };
  }, []);
}
