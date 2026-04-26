export const HERO_CONTENT = {
  label: "Software Engineer · ML Systems · Founder",
  headline: "I ship production systems that scale.",
  subheadline:
    "Full-stack engineer and founder with deep experience in ML infrastructure, data platforms, and distributed systems. From leading a 10-engineer team that beat Pratt & Whitney's best model by 38.2%, to deploying autonomous AI agents in production — I build software that works at scale and solves hard problems.",
  cta: {
    primary: { text: "View AeroML Case Study", href: "#aeroml" },
    secondary: { text: "Visit Cogentic", href: "https://cogentichq.com/" },
    tertiary: { text: "Get in Touch", href: "#contact" },
  },
};

export const AEROML = {
  title: "AeroML",
  subtitle: "No-Code AutoML Platform for Aerospace Manufacturing",
  summary:
    "AeroML is a local-first no-code AutoML platform built for aerospace manufacturing teams. I led a team of 10+ engineers to design and ship an end-to-end ML system that lets non-technical users ingest, clean, visualize, train, evaluate, and deploy predictive models. In a Wire EDM defect-prediction use case for Pratt & Whitney, AeroML outperformed the best internal baseline by 38.2% MAE, while reducing model-building time from weeks to minutes.",
  videoUrl: "https://drive.google.com/file/d/1AyQwt_PZ091EtPpPlzbzziFQuU69pJsA/view?usp=sharing",
  links: {
    presentation:
      "https://drive.google.com/file/d/1AyQwt_PZ091EtPpPlzbzziFQuU69pJsA/view?usp=sharing",
    github: "https://github.com/Aymane-Arfaoui",
    contact: "#contact",
  },
  metrics: [
    { value: "38.2%", label: "MAE Improvement", detail: "vs Pratt & Whitney internal baseline" },
    { value: "10+", label: "Engineers Led", detail: "Full cross-functional team" },
    { value: "Minutes", label: "Model Build Time", detail: "Down from weeks" },
    { value: "Local-First", label: "Secure Desktop", detail: "Data stays on-device" },
  ],
  problem:
    "Aerospace manufacturing teams sit on valuable process data, but building ML models requires data scientists, manual cleaning, Jupyter notebooks, and long iteration cycles. Teams at Pratt & Whitney needed weeks to go from raw manufacturing data to a usable predictive model.",
  solution:
    "AeroML turns the entire ML lifecycle into a guided desktop workflow. Non-technical engineers upload a CSV, clean it with one click, visualize quality trends, train models via AutoML, compare results on a leaderboard, and deploy predictions — all without writing a single line of code.",
  architecture: [
    {
      stage: "Bronze",
      title: "Raw Ingestion",
      description:
        "Raw CSV/Excel data ingested as-is. Schema detected, metadata captured, lineage tracked from the first byte.",
      color: "from-amber-700 to-amber-500",
    },
    {
      stage: "Silver",
      title: "Cleaned & Validated",
      description:
        "Automated cleaning, type inference, null handling, outlier detection, and schema validation. Fully reproducible transformations.",
      color: "from-slate-400 to-slate-300",
    },
    {
      stage: "Gold",
      title: "Analytics-Ready",
      description:
        "Feature-engineered datasets powering visualizations, AutoML training, evaluation leaderboards, and prediction endpoints.",
      color: "from-yellow-500 to-amber-400",
    },
  ],
  features: [
    { title: "CSV / Excel Upload", description: "Drag-and-drop data ingestion with automatic format detection" },
    { title: "Dataset Profiling", description: "Statistical summaries, distributions, and data-quality scores" },
    { title: "Automated Cleaning", description: "One-click null handling, outlier removal, and type casting" },
    { title: "Data Quality Report", description: "Visual report cards highlighting issues and cleaning actions" },
    { title: "Visual Dashboards", description: "Interactive charts for trends, correlations, and distributions" },
    { title: "AutoML Training", description: "CASH-style model search with AutoGluon-level experimentation" },
    { title: "Evaluation Leaderboard", description: "Side-by-side model comparison with metrics and rankings" },
    { title: "Prediction Interface", description: "Upload new data, select a model, get instant predictions" },
    { title: "Desktop Packaging", description: "Electron-wrapped local-first app — no cloud dependency required" },
  ],
  role: "Founder, technical lead, and team lead. Architected the system, defined the roadmap, coordinated a team of 10+ engineers across frontend, backend, ML, deployment, and documentation. Directed backend and ML strategy, led stakeholder communication with Pratt & Whitney, executed release management, and delivered the final presentation.",
  techStack: [
    "Python",
    "FastAPI",
    "Electron",
    "React",
    "TypeScript",
    "Docker",
    "GitHub Actions",
    "Pandas",
    "NumPy",
    "scikit-learn",
    "AutoML",
    "PostgreSQL",
    "DuckDB",
    "Parquet",
    "CI/CD",
  ],
  impact: {
    headline: "38.2% better MAE than Pratt & Whitney's best internal model.",
    points: [
      "Advanced ML models built in minutes instead of weeks",
      "Local-first secure deployment — data never leaves the device",
      "Reusable platform generalizable beyond aerospace manufacturing",
      "Medallion architecture ensuring reproducibility and data lineage",
    ],
  },
};

export const PROJECTS = [
  {
    title: "AeroML",
    type: "No-Code AutoML Platform",
    description:
      "Led 10+ engineers to ship a local-first AutoML platform for Pratt & Whitney. Outperformed their best internal model by 38.2% MAE in Wire EDM defect prediction.",
    technologies: ["Python", "FastAPI", "Electron", "React", "AutoML", "Docker"],
    metric: "38.2% MAE Improvement",
    href: "#aeroml",
    featured: true,
  },
  {
    title: "Cogentic",
    type: "AI Agent Infrastructure & Integrations",
    description:
      "Founded and lead an AI implementation company delivering autonomous agents and integrations for legal, fintech, and manufacturing clients.",
    technologies: ["AI Agents", "Claude API", "AWS", "Python", "Terraform"],
    metric: "Multi-Industry Deployments",
    href: "https://cogentichq.com/",
    featured: true,
  },
  {
    title: "Defendly",
    type: "Content Safety & Risk Detection",
    description:
      "Intelligent traffic-ticket defense platform that analyzes tickets for legal errors, jurisdictional issues, and defense opportunities using advanced AI models.",
    technologies: ["React", "Next.js", "Python", "AI/ML", "Stripe"],
    metric: "93% Success Rate",
    href: "https://defendly.vercel.app",
    github: "https://github.com/Aymane-Arfaoui/Defendly",
    featured: false,
  },
  {
    title: "Almentor",
    type: "AI Math Explainer",
    description:
      "Desktop app that transforms screenshots of math problems into animated video explanations using Manim and AI. Reached 12k users in 3 months.",
    technologies: ["Electron", "Python", "Manim", "OpenAI API", "AWS"],
    metric: "12k Users in 3 Months",
    href: "https://almentor.co",
    github: "https://github.com/Aymane-Arfaoui/Almentor",
    featured: false,
  },
];

export const EXPERIENCES = [
  {
    period: "03/2026 – Present",
    role: "CEO & Founder",
    company: "Cogentic",
    location: "Montreal, QC",
    description:
      "Founded and lead an AI implementation company delivering autonomous AI agents and integrations for legal, fintech, and manufacturing clients. Architected agent pipelines, managed client engagements, and shipped production deployments across multiple verticals.",
    technologies: ["AI Agents", "Claude API", "Python", "AWS", "Terraform", "Docker"],
    impact: "Multi-Vertical AI Deployments",
    href: "https://cogentichq.com/",
  },
  {
    period: "04/2026 – Present",
    role: "AI Engineer / Software Engineer",
    company: "Lexsy AI",
    location: "Remote",
    description:
      "Deployed AI agents on AWS EC2, integrated Claude API for real-time inference, and built voice and screen-sharing workflows for autonomous agent interactions. Engineered low-latency pipelines and production monitoring dashboards.",
    technologies: ["Claude API", "AWS EC2", "Python", "Docker", "WebRTC"],
    impact: "Production Agent Deployment",
  },
  {
    period: "09/2023 – 04/2026",
    role: "Software Engineer / ML Infrastructure",
    company: "Pratt & Whitney / RTX",
    location: "Longueuil, QC",
    description:
      "Built aerospace ML infrastructure including Bayesian Monte Carlo surrogate models, OPC-UA real-time data pipelines, and defect-prediction systems. Developed patented architectures for digital-twin reality-gap analysis and 3D visualization. Led the AeroML platform that outperformed internal baselines by 38.2% MAE.",
    technologies: ["Python", "React", "FastAPI", "AWS", "TensorFlow", "OPC-UA", "D3.js", "Docker"],
    impact: "38.2% MAE Improvement · $3M+ Savings",
  },
];

export const SKILLS = {
  languages: ["Python", "C++", "C", "Java", "JavaScript", "SQL", "Go", "Bash/Shell"],
  software_engineering: [
    "Software Development",
    "Systems Engineering",
    "Software Design",
    "Version Control",
    "Automation",
    "CI/CD",
    "SRE",
    "Reliability Engineering",
  ],
  backend_systems: [
    "FastAPI",
    "Node.js",
    "Kafka",
    "RabbitMQ",
    "PostgreSQL",
    "Redis",
    "MQTT",
    "Distributed Systems",
  ],
  ai_ml: [
    "LLMs",
    "AI Agents",
    "Claude API",
    "Bayesian Methods",
    "AutoML / HPO",
    "CASH Algorithms",
    "Data Analysis",
    "Simulation",
    "scikit-learn",
    "NumPy",
    "Pandas",
  ],
  infra_cloud: [
    "Terraform",
    "Docker",
    "Kubernetes",
    "AWS EC2/EKS/S3",
    "GCP GKE/GCS",
    "Tailscale",
    "GitHub Actions",
  ],
};

export const EDUCATION = [
  {
    institution: "Georgia Institute of Technology",
    degree: "Master of Science in Computer Science",
    period: "09/2026 – 05/2028",
    highlight: true,
  },
  {
    institution: "Concordia University, Gina Cody School of Engineering",
    degree: "Bachelor of Engineering in Software Engineering",
    period: "09/2022 – 05/2026",
    exchange: {
      institution: "San Francisco State University",
      label: "Exchange Term",
      gpa: "3.7/4.0",
    },
  },
];

export const PATENTS = [
  {
    title: "Scalable Bayesian Monte Carlo for Aerospace EDM",
    status: "Patent Pending",
    description:
      "Surrogate-model-driven framework predicting electrode consumption using UTM-based depth sensing. Saves millions annually in manufacturing costs.",
  },
  {
    title: "Reality-Gap Analysis for Digital Twins",
    status: "Patent Pending",
    description:
      "Minimizes simulation-to-reality discrepancies using domain, physics-guided, and context losses with Lagrangian-based error detection.",
  },
  {
    title: "3D Visualization via Dirichlet-to-Neumann Maps",
    status: "Patent Pending",
    description:
      "Novel approach to 3D visualization of complex mathematical models and simulations for aerospace engineering applications.",
  },
];

export const LEADERSHIP = [
  {
    role: "VP Sponsorship",
    organization: "Engineering & Computer Science Association",
    description:
      "Secured corporate sponsorships for hackathons and student tech initiatives at Concordia University.",
  },
  {
    role: "Student Ambassador",
    organization: "San Francisco State University Exchange Program",
    description:
      "Represented the international exchange program and supported incoming students during the SFSU term.",
  },
];

export const CONTACT = {
  name: "Aymane Arfaoui",
  location: "Montreal, QC",
  email: "arfaouiaymane@hotmail.com",
  phone: "514-632-8622",
  linkedin: "https://www.linkedin.com/in/aymanearfaoui",
  github: "https://github.com/Aymane-Arfaoui",
  portfolio: "https://aymanearfaoui.vercel.app",
  cogentic: "https://cogentichq.com/",
  aeromlPresentation:
    "https://drive.google.com/file/d/1AyQwt_PZ091EtPpPlzbzziFQuU69pJsA/view?usp=sharing",
};
