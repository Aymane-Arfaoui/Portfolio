import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `My name is Aymane Arfaoui, and I am a third year at Concordia University majoring in Software Engineering. I have previously interned with Pratt & Whitney Canada and Raytheon RTX, where I worked as a Data Analyst and Machine Learning Engineer. In my free time, I work on side projects including a Web-Based University Exchange Platform and an AI Medical Counselor Startup. Please feel free to reach out!`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Summer 2024",
    role: "Machine Learning Engineer and Full Stack Web Developer",
    company: "Pratt & Whitney Canada",
    description: `Developed multiple neural network models using Keras and TensorFlow, achieving 93% accuracy in predicting deviations. Learned about activation functions, optimizers, and back propagation. Built a full stack platform to make models and graphs available to the team.`,
    technologies: ["Python", "Keras", "TensorFlow", "Flask", "MongoDB", "Azure","React.js", "Node.js"],
  },
  {
    year: "Winter 2024",
    role: "Data Analyst and Machine Learning Engineer",
    company: "Pratt & Whitney Canada",
    description: `Developed advanced machine learning models to optimize turbine production processes. Achieved a remarkable prediction accuracy of key variables up to 96.37%. Utilized Python and its libraries for data analysis and visualization.`,
    technologies: ["Python", "Matplotlib", "Seaborn", "Pandas", "NumPy"],
  },
  {
    year: "Fall 2023",
    role: "Data Analyst and Line Supervisor",
    company: "Raytheon RTX",
    description: `Conducted in-depth data analysis to optimize machine manufacturing processes for aircraft engines. Managed a team of over 30 employees, ensuring quality standards. Designed SQL databases to streamline data storage, retrieval, and analysis.`,
    technologies: ["Python", "SQL" , "Excel", "Power BI", "VBA"],
  },
];

export const PROJECTS = [
  {
    title: "Team Lead for a Web-Based University Exchange Platform",
    image: project2,
    description:
    "Led a team of 5 in the design and implementation of a sophisticated web-based platform, integrating cutting-edge technologies to facilitate university exchange programs.",
    technologies: ["Python", "Flask", "Bootstrap", "Apache", "AWS", "MySQL"],
  },
  {
    title: "AI Medical Counselor Startup",
    image: project1,
    description:
      "Founded a non-profit startup promoting medical counseling through an AI-trained model in collaboration with McGill. Worked with a team of doctors to revolutionize medical counseling through AI and SFBT therapy.",
    technologies: ["JavaScript", "React", "Java", "Python"],
  },
  {
    title: "Full File System",
    image: project3,
    description:
      "Developed a full file system in C as part of a team of five, handling various file operations and ensuring system robustness.",
    technologies: ["C", "Linux"],
  },
  {
    title: "Full Stack App for Pratt & Whitney",
    image: project4,
    description:
      "Developed a full stack application for the WEDM development team at Pratt & Whitney, featuring data visualizations using the D3 library and a model prediction algorithm on the platform.",
    technologies: ["JavaScript", "React", "Node.js", "D3.js", "Python"],
  },
];

export const CONTACT = {
  currentCity: "Montreal, Quebec",
  phoneNo: "514-632-8622",
  email: "arfaouiaymane@hotmail.com",
};

