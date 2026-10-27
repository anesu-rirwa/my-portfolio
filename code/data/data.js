export const site = {
  name: 'Anesu Rirwa',
  role: 'AI & Machine Learning Engineer',
  url: 'https://anesu.kordeldata.com',
  email: 'anesurirwa@outlook.com',
  location: 'Harare, Zimbabwe',
  cv: '/Anesu_Rirwa_CV.pdf',
};

export const navLinks = [
  { name: 'About', href: '/#about' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Work', href: '/#work' },
  { name: 'Expertise', href: '/#expertise' },
  { name: 'Contact', href: '/#contact' },
];

export const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anesurirwa/' },
  { name: 'GitHub', url: 'https://github.com/anesu-rirwa' },
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
          'Built a Python machine learning model forecasting production grade, tonnage and costs (R² = 0.82), now used for budgeting and planning.',
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
        period: 'Jan 2025 — Jun 2025',
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

// Only projects with a public link are shown. Internal work (MRIS, ore-grade model,
// production forecasting) is described under Experience instead.
// Projects with a `notebook` get their own page at /notebooks/[slug], rendered from
// public/notebooks/<notebook> with the outputs from its last run. Add `repo` once the
// notebook has a public GitHub repository.
export const projects = [
  {
    title: 'Shona Next-Word Prediction',
    kind: 'NLP · African languages',
    description:
      'A next-word prediction model for Shona, a low-resource African language. I built a Shona text corpus from PDF documents, cleaned and tokenised it, and trained word embeddings on it with Word2Vec. I compared two bidirectional LSTM models, one learning its own embeddings and one using the Word2Vec embeddings, and kept the one with lower validation loss. Given five Shona words, the model suggests the words that come next.',
    tags: ['Python', 'TensorFlow/Keras', 'BiLSTM', 'Word2Vec'],
    slug: 'shona-next-word-prediction',
    notebook: 'Shona_Next_Word_Prediction.ipynb',
  },
  {
    title: 'FIFA World Cup 2026 Match Prediction',
    kind: 'Machine learning · Sports analytics',
    description:
      'XGBoost models that predict international football matches, covering the result, goals, both teams scoring, corners and cards, trained on 7,900 matches from 2002 to 2026. I found and removed a data leak that had been inflating accuracy, tested on the most recent 20% of matches, and calibrated the probabilities. The result model reaches 59.9% accuracy against a 47.5% always-home-win baseline. I benchmarked it against bookmaker odds, which it does not yet beat, and set out the next features to close that gap.',
    tags: ['Python', 'XGBoost', 'Probability calibration', 'Time-based validation'],
    slug: 'fifa-world-cup-2026-match-prediction',
    notebook: 'FIFA_World_Cup_2026_Match_Prediction.ipynb',
  },
  {
    title: 'Calorie Burn Prediction',
    kind: 'Machine learning · Health',
    description:
      'A regression model that predicts calories burned during exercise from gender, age, height, weight, duration, heart rate and body temperature, trained on 15,000 workout records. XGBoost reached R² = 0.999 with a mean error of 1.2 kcal on the test set, against R² = 0.969 for linear regression. The notebook includes an interactive predictor for new inputs.',
    tags: ['Python', 'scikit-learn', 'XGBoost', 'Regression'],
    slug: 'calorie-burn-prediction',
    notebook: 'Calorie_Burn_Prediction.ipynb',
  },
  {
    title: 'Titanic Survival Prediction',
    kind: 'Machine learning · Classification',
    description:
      'A classification model that predicts which Titanic passengers survived from class, sex, age, fare and family size. I imputed missing ages, engineered a family-size feature, and compared logistic regression with a random forest. The random forest reached 83% accuracy on the test set.',
    tags: ['Python', 'scikit-learn', 'Random Forest', 'Logistic regression'],
    slug: 'titanic-survival-prediction',
    notebook: 'Titanic_Survival_Prediction.ipynb',
  },
  {
    title: 'ImariiMaCharges',
    kind: 'Web app · Fintech',
    description:
      'A web app that tells you what an EcoCash transaction will cost before you send it. I built the charge calculations from real EcoCash USD transaction SMS data, so the figures match what users are actually charged. Next, users will be able to compare charges across other wallets and banks, such as CABS and NMB.',
    tags: ['Web app', 'Data from SMS records', 'Kordel Data product'],
    link: 'https://imariimacharges.kordeldata.com',
  },
  {
    title: 'Stridetale (Beta)',
    kind: 'Web app · Health and fitness',
    description:
      'A running and lifting app that turns training into a journey. You pick a real finish line, and every logged run and lift moves you along the real road towards it, with Tsoko the monkey to chase on the way. It is phone-first and currently in beta testing.',
    tags: ['Web app', 'Gamification', 'Mobile-first', 'Kordel Data product'],
    link: 'https://stridetale.kordeldata.com',
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

export const inProgress = [
  {
    title: 'Shona Language Model',
    kind: 'NLP · African languages',
    description:
      'Building on my Shona next-word prediction work. I am benchmarking how well current large language models understand and translate Shona, then fine-tuning an open-source multilingual model to improve its Shona, with native-speaker review of the results.',
  },
  {
    title: 'Zimbabwe Housing Market Analysis',
    kind: 'Data analysis · Machine learning',
    description:
      'Collecting property listings from Zimbabwean property sites to analyse how prices vary by city, suburb and property type. The listings will train a model that estimates a property’s price from its location, size and features.',
  },
  {
    title: 'Chronic Kidney Disease Prediction',
    kind: 'Machine learning · Health',
    description:
      'A classification model that predicts chronic kidney disease from routine clinical measurements such as blood pressure, blood tests and urine results. The model is tuned for recall, so fewer at-risk patients are missed.',
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
  thesis:
    'Optimising customer service operations for SMEs and solopreneurs using AI and machine learning, including a Shona–English natural language processing component.',
};

export const certifications = [
  { name: 'Python for Data Science', issuer: 'IBM', status: '2025' },
  { name: 'Machine Learning Specialization', issuer: 'DeepLearning.AI and Stanford Online (Andrew Ng)', status: 'In progress' },
];

export const community = [
  { name: 'Uncommon.org', role: 'Volunteer mentor in programming and data science', period: '2023 — 2025' },
  { name: 'All In Open Source', role: 'All In Africa programme — hackathons and workshops', period: '2023 — 2024' },
];

export const languages = [
  { name: 'English', level: 'C1 (Duolingo 140)' },
  { name: 'Shona', level: 'Native' },
  { name: 'German', level: 'A2, studying B1' },
];
