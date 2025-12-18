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
    title: "E-Commerce Website",
    link: "https://github.com/manasviwalia2812/Amazon-E-commerce-website.git",
    image: project1,
    description:
      "A fully functional e-commerce website based on Amazon with features like product listing, shopping cart, placing order, tracking delivery",
    technologies: ["HTML", "CSS", "Javascript", "API"],
  },
  {
    title: "Planet Simulator",
    link: "https://github.com/manasviwalia2812/Planet-Simulator.git",
    image: project2,
    description:
      "A python script that simulates a planetary system based on real-life distances, velocity and gravity.",
    technologies: ["Python", "Pygame"],
  },
  {
    title: "Portfolio Website",
    link: "https://github.com/manasviwalia2812/Personal-Portfolio.git",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, experience and contact information.",
    technologies: ["Javascript", "React","Tailwind", "Bootstrap"],
  },
  {
    title: "Traveller's website",
    link:"https://github.com/manasviwalia2812/femmevoyage.git",
    image: project4,
    description:
      "A platform for solo female travellers to connect with others and create and publish travel blog posts, with features like google maps, travel check-list, etc.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
];

export const CONTACT = {
  address: "New Delhi,India",
  email: "manasviwalia@gmail.com",
};
