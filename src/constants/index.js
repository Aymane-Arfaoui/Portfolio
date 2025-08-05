import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import almentorImage from "../assets/almentor.png";
import defendlyImage from "../assets/defendly.png";
import athleticaImage from "../assets/athletica.png";
import sfhacksImage from "../assets/sfhacks.png";

export const HERO_CONTENT = `I'm Aymane Arfaoui, a Software Engineering student at Concordia University passionate about building transformative technology. As a Machine Learning Engineer at Pratt & Whitney, I've developed patented AI models saving millions annually. I'm the creator of Almentor - an AI math explainer that reached 12k users in 3 months, and co-founder of Defendly - an AI-powered traffic ticket defense platform. My work spans from aerospace ML systems to consumer apps that make complex technology accessible to everyone.`;

export const ABOUT_TEXT = `I am a dedicated Software Engineering student with a strong foundation in machine learning, full-stack development, and systems programming. My experience spans from developing patented ML models at Pratt & Whitney to building scalable ETL workflows at Raytheon Technologies. I'm passionate about creating innovative solutions that bridge the gap between cutting-edge technology and real-world applications. My technical expertise includes Python, JavaScript, React Native, TensorFlow, AWS, and C/C++. I thrive in collaborative environments and enjoy tackling complex problems that require both technical depth and creative thinking.`;

export const EXPERIENCES = [
  {
    year: "Aug 2024 – Present",
    role: "Machine Learning Engineer Intern",
    company: "Pratt & Whitney",
    location: "Longueuil, QC",
    description: `Led development of a patented scalable Bayesian Monte Carlo surrogate model that predicts electrode consumption in real time, saving $3M+ annually. Improved WEDM defect-detection accuracy by 20% using BNNs and statistical process optimization. Filed a disclosure for 3D visualization using Dirichlet-to-Neumann maps. Patented architecture to minimize simulation-to-reality discrepancies using domain, physics-guided, and context losses.`,
    technologies: ["Python", "JavaScript", "React", "Flask", "AWS", "C#", "Jira", "CI/CD"],
    impact: "$3M+ potential Savings",
    highlight: "Patent-Pending ML Model"
  },
  {
    year: "Jan 2024 – Aug 2024",
    role: "Software Engineer Intern",
    company: "Pratt & Whitney",
    location: "Longueuil, QC",
    description: `Built and deployed a full-stack app integrated with SAP APIs, reducing manual engine-part data processing by ~23 minutes per employee. Engineered an EDM monitoring system with OPC UA protocol and visualizations using D3.js and Chart.js.`,
    technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
    impact: "23min Saved Per Employee",
    highlight: "Full-Stack Integration"
  },
  {
    year: "Sep 2023 – Dec 2023",
    role: "Data Engineer Intern",
    company: "Raytheon Technologies",
    location: "Longueuil, QC",
    description: `Reduced machine downtime by 16% with automated SPC and anomaly detection pipelines. Built scalable ETL workflows and analytics dashboards.`,
    technologies: ["Python", "PostgreSQL", "Spark", "Pandas", "Matplotlib"],
    impact: "16% Downtime Reduction",
    highlight: "Automated Pipelines"
  },
];

export const PROJECTS = [
  {
    title: "Almentor",
    type: "AI Math Explainer Desktop App",
    image: almentorImage,
    description: "Revolutionary desktop application that transforms screenshots of math problems into beautifully animated video explanations using Manim and AI. Features real-time problem recognition, step-by-step solution generation, and AI-narrated video creation. Reached 12k users in just 3 months with potential of 3M+ dollars in savings for educational institutions.",
    technologies: ["Electron", "JavaScript", "Python", "Manim", "AWS", "OpenAI API", "Computer Vision"],
    duration: "May 2025 – Present",
    metrics: "12k Users in 3 Months",
    website: "https://almentor.co",
    github: "https://github.com/Aymane-Arfaoui/Almentor",
    featured: true
  },
  {
    title: "Defendly AI",
    type: "AI-Powered Legal Defense Platform",
    image: defendlyImage,
    description: "Intelligent traffic ticket defense platform that analyzes tickets for legal errors, jurisdictional issues, and defense opportunities. Built with advanced AI models trained on millions of legal cases, helping users save thousands on fines while protecting insurance rates. Features global coverage across 13+ regions.",
    technologies: ["React", "Next.js", "Python", "TensorFlow", "AWS", "Stripe", "Legal APIs"],
    duration: "2024 – Present",
    metrics: "93% Success Rate",
    website: "https://defendly.vercel.app",
    github: "https://github.com/Aymane-Arfaoui/Defendly",
    featured: true
  },
  {
    title: "Athletica+",
    type: "iOS App",
    image: athleticaImage,
    description: "A comprehensive fitness companion app designed for iPad and iPhone that combines personalized workout plans, smart tracking, and intuitive progress insights. Features real-time progress tracking, goal-based programs, and a seamless user experience to help users unlock their full potential.",
    technologies: ["React Native (Expo)", "iOS", "TestFlight", "Health & Fitness"],
    duration: "2025 – Present",
    metrics: "Live on App Store",
    appStore: "https://apps.apple.com/us/app/athletica/id6748931550",
    github: "https://github.com/Aymane-Arfaoui/Athletica",
    featured: false
  },
  {
    title: "Crowdsourcing Safety App",
    type: "Web App",
    image: sfhacksImage,
    description: "Mapped dangerous zones and enabled one-tap emergency calls to improve safety for women. Won Google Cloud Prize at SF Hacks 2024.",
    technologies: ["JavaScript", "React", "TypeScript", "Google Maps API"],
    duration: "Apr 2024",
    award: "Google Cloud Prize Winner",
    featured: false
  },
  {
    title: "Unix-Like File System",
    type: "Systems Project",
    image: project4,
    description: "Built a file system from scratch in C supporting directory hierarchy, contiguous allocation, dynamic file growth, and standard operations.",
    technologies: ["C"],
    duration: "Jan 2024 – Apr 2024",
    featured: false
  },
];

export const SKILLS = {
  programming_languages: ["Python", "JavaScript", "C", "C++", "Java", "SQL"],
  mobile: ["React Native (Expo)", "iOS", "Xcode", "App Store Connect", "TestFlight"],
  tools_and_technologies: [
    "TensorFlow", "Scikit-learn", "AWS", "SageMaker", "Azure", "Electron", "Supabase",
    "Flask", "Django", "Docker", "Git", "Jenkins", "Kubernetes", "Jira", "Spark",
    "PostgreSQL", "MySQL", "MongoDB"
  ],
  foundations: ["Data Structures & Algorithms", "Operating Systems", "Databases", "Networking"]
};

export const EDUCATION = {
  institution: "Concordia University",
  location: "Montréal, QC",
  degree: "B.Eng. Software Engineering",
  duration: "Sept 2022 – May 2026",
  exchange: {
    institution: "San Francisco State University",
    gpa: "3.7"
  }
};

export const PATENTS_AND_RESEARCH = [
  {
    title: "Scalable Bayesian Monte Carlo for Aerospace EDM",
    status: "Patent-Pending",
    description: "Surrogate-model–driven framework predicting electrode consumption using UTM-based depth sensing. Saves millions annually.",
    impact: "$3M+ potential Savings"
  },
  {
    title: "Reality-Gap Analysis for Digital Twins",
    status: "Patent-Pending",
    description: "Minimizes sim-to-reality discrepancies using domain, physics-guided, and context losses. Includes Lagrangian-based error detection.",
    impact: "20% Accuracy Improvement"
  },
  {
    title: "Advanced 3D Visualization using Dirichlet-to-Neumann Maps",
    status: "Patent-Pending",
    description: "Novel approach to 3D visualization techniques for complex mathematical models and simulations.",
    impact: "Enhanced Visualization"
  },
  {
    title: "Automated Anomaly Detection Pipeline",
    status: "Patent-Pending",
    description: "Machine learning-based system for real-time anomaly detection in manufacturing processes.",
    impact: "16% Downtime Reduction"
  }
];

export const EXTRACURRICULARS = [
  {
    role: "VP Sponsorship",
    organization: "Engineering & Computer Science Association (ECA), Concordia",
    description: "Secured sponsorships for hackathons and student tech initiatives by forging corporate partnerships."
  }
];

export const CONTACT = {
  currentCity: "Montreal, Quebec",
  phoneNo: "+1 (514) 632-8622",
  email: "arfaouiaymane@hotmail.com",
  linkedin: "https://www.linkedin.com/in/aymanearfaoui",
  github: "https://github.com/Aymane-Arfaoui"
};

export const ACHIEVEMENTS = [
  {
    number: "12k",
    label: "Almentor Users",
    description: "In 3 months"
  },
  {
    number: "$3M+",
    label: "potential Savings",
    description: "From ML Models"
  },
  {
    number: "93%",
    label: "Success Rate",
    description: "Defendly Platform"
  },
  {
    number: "4",
    label: "Patents Pending",
    description: "AI Innovations"
  }
];

