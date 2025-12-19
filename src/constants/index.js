import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Hello! I am a motivated student with a track record of academic excellence looking for part-time work to furnish skills and develop professional work experience utilizing excellent communication and time management skills. `;

export const ABOUT_TEXT = [
  "I’m a motivated Computer Science student with a strong academic background and a deep interest in building impactful software. 💻✨",
  "I enjoy working with React, Next.js, and Python 🐍, and I’m currently exploring full-stack development while strengthening my foundations in problem solving and system design. 🧠",
  "I’m eager to grow in a dynamic environment 🌱, contribute to meaningful projects, and collaborate in open-source communities where learning never stops. 🚀"
];


export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Joint Head of Technical Projects",
    company: "IEE WIE MUJ",
    description: `Managed and updated the organization's website to ensure optimal functionality and user experience. Created and oversaw Google Forms for various organizational needs. Conducted and judged all tech-related events, such as hackathons, ensuring they were well-organized and impactful.`,
    technologies: ["Javascript", "React.js", "Next.js", "HTML","CSS","Bootstrap"],
  },
  
  {
    year: "June 2022 - Dec 2022",
    role: "Fundraising volunteer",
    company: "Athma NGO",
    description: `As part of the marketing team, raised funds for the NGO to support the planting of 1,00,000 trees by the end of the year all over India. Contributed to planning and executing fundraising campaigns, ensuring successful outcomes and impactful environmental contributions.`,
    technologies: ["Marketing", "Promotions", "Fundraising", "Campaign Management"],
  },
];

export const PROJECTS = [
  {
    slug: "ecommerce-website",
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional Amazon-style e-commerce platform with cart, orders, and delivery tracking.",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/manasviwalia2812/Amazon-E-commerce-website.git",
    blog: null,
    paper: null,
  },
  {
    slug: "planet-simulator",
    title: "Planet Simulator",
    image: project2,
    description:
      "A Python-based planetary motion simulator using physics-based gravity models.",
    technologies: ["Python", "Pygame"],
    github: "https://github.com/manasviwalia2812/Planet-Simulator.git",
    blog: null,
    paper: null,
  },
  {
    slug: "research-project",
    title: "ML Research Project",
    image: project3,
    description:
      "A research-focused ML project with experiments, results, and analysis.",
    technologies: ["Python", "ML", "Research"],
    github: null,
    blog: null,
    paper: "/papers/ml-research.pdf",
  },
];


export const CONTACT = {
  address: "New Delhi,India",
  email: "manasviwalia@gmail.com",
};
