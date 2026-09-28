export const site = {
  name: 'Anesu Rirwa',
  role: 'Data & AI Engineer',
  url: 'https://anesurirwa.vercel.app',
  email: 'anesurirwa@outlook.com',
  location: 'Harare, Zimbabwe',
  cv: '/Anesu_Rirwa_CV.pdf',
};

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Work', href: '#work' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Contact', href: '#contact' },
];

export const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anesurirwa/' },
  { name: 'GitHub', url: 'https://github.com/anesu-rirwa' },
  { name: 'Kaggle', url: 'https://www.kaggle.com/anesurirwa' },
  { name: 'Tableau', url: 'https://public.tableau.com/app/profile/anesu.rirwa/vizzes' },
  { name: 'Email', url: `mailto:${site.email}` },
];

export const stats = [
  { value: '70%', label: 'less manual data preparation after automating mine tracking' },
  { value: 'R² 0.82', label: 'production and cost forecasting model in use for planning' },
  { value: '3', label: 'subsidiaries run on one ERP I designed and built' },
  { value: '4+ yrs', label: 'shipping software, from websites to data platforms' },
];

export const experience = [
  {
    company: 'Munisa Resources',
    url: 'https://munisaresources.com',
    about: 'Mining and infrastructure group, Harare',
    roles: [
      {
        title: 'Data & AI Engineer and Technology Lead',
        period: 'Nov 2025 — Present',
        points: [
          'Own the technology stack and roadmap for the group and its three subsidiaries, from architecture through deployment and support.',
          'Designed and built MRIS, a full-stack ERP for group-wide mining and corporate operations, with AI-driven reporting that parses daily shift inputs and forecasts operational trends.',
          'Launched DealRoom, a marketplace connecting mineral claim holders with buyers and investors, with NDA-gated title details.',
          'Produce weekly, monthly and board-level reporting on operations, production and market trends.',
        ],
      },
      {
        title: 'Data Analyst',
        period: 'Jul 2025 — Oct 2025',
        points: [
          'Digitised paper logbooks and Word documents into an interim Excel and Power BI tracking system.',
          'Automated tracking of explosives usage, production output and labour metrics, cutting manual data preparation by 70%.',
          'Built a Python model forecasting production output and operational costs (R² = 0.82).',
        ],
      },
    ],
  },
  {
    company: 'Kordel Data',
    url: 'https://kordeldata.com',
    about: 'Independent data & AI engineering practice',
    roles: [
      {
        title: 'Founder & Principal Consultant',
        period: 'Jan 2026 — Present',
        points: [
          'Maphompe Minerals: designed a structured data capture system from scratch and deployed live dashboards for day-to-day operational visibility.',
          'Capital Physiotherapy: building the clinic’s website and patient records and bookings system, designed to comply with Zimbabwe’s Cyber and Data Protection Act.',
        ],
      },
    ],
  },
  {
    company: 'Gifted Community Organisation',
    about: 'Non-profit, Harare',
    roles: [
      {
        title: 'Data Analyst & Software Engineer',
        period: 'Jan 2025 — Jun 2026',
        points: [
          'Built the organisation’s website to improve donor visibility, engagement and transparency.',
          'Researched funding models and resource allocation to guide growth and financial planning.',
        ],
      },
    ],
  },
  {
    company: 'Webgems',
    about: 'Web & mobile studio, Harare',
    roles: [
      {
        title: 'Software Engineer Intern',
        period: 'Aug 2022 — Aug 2023',
        points: [
          'Built responsive websites and cross-platform mobile apps with React, WordPress and Ionic.',
          'Wrote tutorials and onboarding documentation for new team members and users.',
        ],
      },
    ],
  },
];

export const projects = [
  {
    title: 'MRIS — Munisa Resources Internal System',
    kind: 'ERP · In production',
    description:
      'Full-stack ERP that moved a mining group off paper logbooks and scattered spreadsheets onto one system, with live dashboards for directors, finance, procurement and the mine manager.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Supabase'],
  },
  {
    title: 'DealRoom',
    kind: 'Marketplace · Live',
    description:
      'Marketplace connecting Zimbabwean mineral claim holders with buyers and investors — confidential teaser listings, mandate registration and title details released only under NDA.',
    tags: ['Next.js', 'PostgreSQL', 'SEO'],
    link: 'https://dealroom.munisaresources.com',
  },
  {
    title: 'Ore Grade Prediction',
    kind: 'Machine learning · In progress',
    description:
      'XGBoost and Random Forest models that predict the grade of unmined blocks and flag economically viable ones, with spatial features and a dashboard for mine planning.',
    tags: ['Python', 'XGBoost', 'Random Forest', 'Geospatial'],
  },
  {
    title: 'Production & Cost Forecasting',
    kind: 'Machine learning · Internal',
    description:
      'Regression model forecasting mine production output and operating costs (R² = 0.82), used to support operational and budget planning.',
    tags: ['Python', 'scikit-learn', 'Forecasting'],
  },
  {
    title: 'British Airways Reviews',
    kind: 'Dashboard',
    description:
      'Sentiment analysis of customer reviews in an interactive dashboard highlighting pain points and satisfaction trends.',
    tags: ['Tableau', 'Sentiment analysis'],
    link: 'https://public.tableau.com/app/profile/anesu.rirwa/viz/BritishAirwaysReviews_17398212926130/Dashboard',
  },
  {
    title: 'Netflix Content Trends',
    kind: 'Dashboard',
    description:
      'Interactive dashboard exploring how Netflix’s catalogue has shifted across genres, countries and release years.',
    tags: ['Tableau', 'Data visualisation'],
    link: 'https://public.tableau.com/app/profile/anesu.rirwa/viz/NetflixDashboard_17377463926360/Netflix',
  },
];

export const services = [
  {
    title: 'Data systems',
    description: 'Structured data capture, relational database design and ETL pipelines that replace paper and spreadsheets.',
  },
  {
    title: 'Business intelligence',
    description: 'Power BI and Tableau dashboards and board-ready reporting that people actually use every day.',
  },
  {
    title: 'Applied machine learning',
    description: 'Forecasting and prediction models built on your own operational data and put into production.',
  },
  {
    title: 'Web applications',
    description: 'Production Next.js and TypeScript apps, from internal tools to public-facing marketplaces.',
  },
];

export const skills = [
  { group: 'Programming', items: ['Python', 'TypeScript', 'SQL'] },
  { group: 'Machine learning', items: ['scikit-learn', 'XGBoost', 'Random Forest', 'Forecasting', 'NLP', 'TensorFlow', 'PyTorch'] },
  { group: 'Data & BI', items: ['PostgreSQL', 'Supabase', 'ETL pipelines', 'Pandas', 'NumPy', 'Power BI', 'Tableau', 'Excel', 'SharePoint'] },
  { group: 'Software', items: ['Next.js', 'React', 'Flask', 'Git', 'SEO', 'WordPress', 'Ionic'] },
];

export const education = {
  school: 'University of Zimbabwe',
  degree: 'BSc (Hons) Artificial Intelligence and Machine Learning',
  detail: 'Upper Second Class (2.1) · Class Representative',
  period: '2020 — 2024',
  thesis: 'Optimising customer service operations for SMEs and solopreneurs using AI and machine learning.',
};

export const certifications = [
  { name: 'Python for Data Science', issuer: 'IBM', status: '2025' },
  { name: 'Azure Fundamentals (AZ-900)', issuer: 'Microsoft', status: 'Exam Nov 2026' },
  { name: 'Azure AI Engineer Associate (AI-102)', issuer: 'Microsoft', status: 'Preparing' },
];

export const community = [
  { name: 'Uncommon.org', role: 'Volunteer mentor in programming and data science', period: '2023 — 2025' },
  { name: 'All In Open Source', role: 'All In Africa programme — hackathons and workshops', period: '2023 — 2024' },
];

export const languages = [
  { name: 'English', level: 'Duolingo 140' },
  { name: 'Shona', level: 'Fluent' },
  { name: 'German', level: 'A1, A2 in progress' },
];
