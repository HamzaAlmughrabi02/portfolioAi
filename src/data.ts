export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  tags: string[];
  summary: string;
  result: string;
  details: string[];
  repo?: string;
  image?: string;
  demoNote?: string;
  demo?: string;
}

// Project descriptions, reported results, and destinations come from the supplied CV.
export const projects: Project[] = [
  {
    id: 'ML_01',
    title: 'Car Insurance Claim Prediction',
    category: 'Machine learning',
    year: '2026 · Present',
    tags: ['Python', 'Scikit-learn', 'Streamlit', 'GridSearchCV'],
    summary: 'An end-to-end machine learning application for predicting car insurance claims and assessing risk interactively.',
    result: 'Interactive risk assessment',
    details: [
      'Combined Random Forest and Gradient Boosting in an optimized Soft Voting Classifier.',
      'Tuned the model with GridSearchCV and automated feature alignment for predictions.',
      'Built and deployed a Streamlit application with a modular project structure.',
    ],
    repo: 'https://github.com/HamzaAlmughrabi02/Car-Insurance-Claim-Prediction-System',
    demo: 'https://car-insurance-claim-prediction-system-bubdspjm9reugmqbqewk22.streamlit.app/',
  },
  {
    id: 'AI_02',
    title: 'Financial RAG AI Assistant',
    category: 'Applied AI',
    year: '2026',
    tags: ['LangChain', 'ChromaDB', 'Groq API', 'Streamlit'],
    summary: 'A financial question-answering assistant that retrieves information from PDFs and tracks the sources behind its answers.',
    result: 'Answers with source tracking',
    details: [
      'Deployed an end-to-end RAG pipeline with PDF parsing, dynamic chunking, and ChromaDB vector storage.',
      'Integrated Llama-3.1-8b-instant through the Groq API with a temperature setting of 0.1.',
      'Built an interactive Streamlit interface with source-verification tracking.',
    ],
    repo: 'https://github.com/HamzaAlmughrabi02/Enterprise_RAG',
  },
  {
    id: 'DE_03',
    title: 'Data Warehouse & Analytics',
    category: 'Data engineering',
    year: '2026',
    tags: ['SQL Server', 'Databricks', 'ETL', 'Data Modeling'],
    summary: 'A corporate data warehouse that brings ERP and CRM sales data together for customer and product analytics.',
    result: 'Unified ERP & CRM sales data',
    details: [
      'Designed a data warehouse using SQL Server and Databricks with Medallion Architecture.',
      'Executed ETL data cleaning to centralize ERP and CRM sales data.',
      'Delivered SQL-based analytics to examine customer trends and product performance.',
    ],
    repo: 'https://github.com/HamzaAlmughrabi02/sql-data-warehouse-project',
  },
  {
    id: 'ML_04',
    title: 'Sales Forecasting System',
    category: 'Predictive analytics',
    year: '2025',
    tags: ['Python', 'XGBoost', 'Power BI', 'Feature Engineering'],
    summary: 'A sales forecasting workflow combining an XGBoost regression model with an interactive business intelligence dashboard.',
    result: 'R² 0.999 · RMSE 56.6',
    details: [
      'Built an XGBoost regression model with advanced feature engineering to forecast sales trends.',
      'Reported an R² of 0.999 and RMSE of 56.6 in the CV project evaluation.',
      'Developed a Power BI dashboard to visualize sales drivers and support business decisions.',
    ],
    repo: 'https://github.com/HamzaAlmughrabi02/sales-forecasting-project',
  },
  {
    id: 'DA_05',
    title: 'Telecom Customer Churn Analysis',
    category: 'Data analytics',
    year: '2025',
    tags: ['Advanced Excel', 'Pivot Tables', 'Data Visualization'],
    summary: 'An analysis of 6,687 telecom customers to understand churn across demographic and geographic segments.',
    result: '6,687 customers analyzed',
    details: [
      'Processed and analyzed a dataset with an overall customer churn rate of 26.86%.',
      'Used data aggregation and feature engineering to investigate churn drivers.',
      'Built an interactive Excel dashboard highlighting 44% senior churn and a 63.24% churn rate in California.',
    ],
    repo: 'https://github.com/HamzaAlmughrabi02/C-25-812_Hamza-Almughrabi',
  },
  {
    id: 'AI_06',
    title: 'Instagram Intelligence',
    category: 'AI workflow automation',
    year: '2026',
    tags: ['n8n', 'React', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    summary: 'An AI-assisted workspace for collecting Instagram comments, understanding feedback, and coordinating replies, moderation and critical alerts.',
    result: '6 connected n8n workflows',
    details: [
      'Coordinated collection, AI analysis and confidence-based actions through n8n, with Telegram alerts and Google Sheets synchronization.',
      'Built a filterable comment inbox and protected API with owner authentication, ownership checks and duplicate-action protection.',
      'Validated the latest release with 101 backend tests, 16 workflow contract and graph tests, and five isolated demo tests.',
    ],
    demo: 'https://instagram-intelligence-ui.onrender.com/?demo=1',
    image: 'instagram-intelligence-demo.png',
    demoNote: 'Fictional data. All demo actions run locally in your browser; no Instagram account or API key is required.',
  },
];

export const certifications = [
  { issuer: 'The Hope International', title: 'Machine Learning' },
  { issuer: 'The Hope International', title: 'Deep Learning' },
  { issuer: 'Dubai Future Foundation', title: 'Command Engineering for AI' },
  { issuer: 'Microsoft', title: 'Preparing Data for Analysis with Microsoft Excel' },
  { issuer: 'Microsoft', title: 'Harnessing the Power of Data with Power BI' },
  { issuer: 'Microsoft', title: 'Extract, Transform and Load Data in Power BI' },
  { issuer: 'Microsoft', title: 'Data Modeling in Power BI' },
  { issuer: 'Microsoft', title: 'Data Analysis and Visualization with Power BI' },
  { issuer: 'Microsoft', title: 'Creative Designing in Power BI' },
  { issuer: 'Google Cloud', title: 'Foundations: Data, Data, Everywhere' },
  { issuer: 'Google Cloud', title: 'Build Data Lakes and Data Warehouses' },
  { issuer: 'IBM Developer', title: 'Machine Learning with PyTorch' },
  { issuer: 'DataCamp', title: 'Intermediate Python for Developers' },
  { issuer: 'DataCamp', title: 'Supervised Learning with scikit-learn' },
  { issuer: 'HTU', title: 'Web Design (Basic)' },
  { issuer: 'AWS', title: 'Amazon SageMaker AI Getting Started' },
];
