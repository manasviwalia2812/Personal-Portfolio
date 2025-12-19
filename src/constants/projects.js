import pygame from "../assets/projects/pygame.jpg";
import genesis from "../assets/projects/projectgenesis.png";
import dualityai from "../assets/projects/spaceobj.jpg";
import brain from "../assets/projects/brain.png";
import bookloop from "../assets/projects/bookloop.png";
import aibot from "../assets/projects/aibot.jpg";
import femmevoyage from "../assets/projects/femmevoyage.png";
import cube from "../assets/projects/cube.gif";
import amazon from "../assets/projects/amazon.png"; 
import inventory from "../assets/projects/inventory.png"; 

export const PROJECTS = [
  //brain tumor segmentation project
  {
    slug: "brain-tumor-segmentation",
    title: "Brain Tumor Segmentation using Deep Learning (BraTS)",
    image: brain,

    overview:
      "Automated medical image segmentation system for detecting and mapping brain tumors from MRI scans using deep learning.",

    sections: {
      mission: "Diagnosing brain tumors from MRI scans is a high-stakes, time-consuming task for radiologists. This project automates that process, using advanced deep learning to identify and map tumor regions with pixel-level precision.",      // 🧠 The Mission
      build: "This wasn't just a simple classification task; it was a complex semantic segmentation problem. I architected a deep learning solution using TensorFlow/Keras, leveraging the U-Net architecture—a gold standard in biomedical image segmentation.",        // 🛠️ The Build
      deepDive: "I evolved the model by experimenting with Res-Net backbones to deepen the network without losing feature granularity. The model processes multi-modal MRI scans (T1, T1ce, T2, FLAIR) from the BraTS dataset, effectively \"seeing\" the tumor through different magnetic resonance filters.",     // 🔬 Deep Dive
      tech: "o handle the massive computational load, I optimized the training pipeline to run on a local GPU setup, managing memory constraints while processing heavy 3D volumetric data slices.",         // ⚙️ The Tech
      result: "The model outputs precise segmentation masks, differentiating between the whole tumor, the tumor core, and the enhancing tumor. It’s a tool that doesn't just \"guess\"—it paints a diagnostic map. 🧬",       // 🧬 The Result
    },

    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "U-Net",
      "ResNet",
      "BraTS Dataset",
      "Medical Imaging",
    ],

    github: "https://github.com/yourusername/brain-tumor-seg",
    blog: "https://www.linkedin.com",
    paper: "https://www.linkedin.com",
  },

    //bookloop project
  {
    slug: "bookloop-platform",
    title: "📚 BookLoop: Peer-to-Peer Book Exchange Platform",
    image: bookloop,

    overview:
      "Computer vision system that scans and solves a real-world Rubik’s Cube using optimal algorithms.",

    sections: {
      mission: "Education shouldn't break the bank, and good books shouldn't gather dust. BookLoop was born from the realization that college students spend a fortune on textbooks that they only use for a semester. We wanted to build a circular economy—a sustainable loop—where knowledge flows freely between seniors and juniors.",
      build: "",
      deepDive: "",
      tech: "I architected a robust REST API using Node.js and Express, ensuring fast response times for search queries. We used MongoDB for the database because its document-oriented structure was perfect for storing varied book metadata (ISBN, condition, genre, edition).Frontend & UX: The interface is built with React, featuring a clean, responsive dashboard. I implemented a dynamic search bar with debouncing to reduce API calls while users type.The app uses location data to connect buyers and sellers on the same campus.Integrated a socket-based chat feature (Socket.io) so users can negotiate prices and arrange meetups without leaving the app.",
      result: "It turns a chaotic Facebook Marketplace experience into a streamlined, dedicated platform for students. It solves the \"broke student\" problem with code. 💸🔄",
    },

    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],

    github: "https://github.com/yourusername/rubiks-solver",
    blog: null,
    paper: "https://drive.google.com/file/d/1VeiE2QScDhsW-O8S3_Yxm-T_vdy-p6OF/view?usp=drive_link",
  },

    //ai leetcode assistant chrome extension project
  {
    slug: "leetcode-assistant-extension",
    title: "🤖 AI LeetCode Assistant (Chrome Extension)",
    image: aibot,

    overview:
      "Browser extension that provides AI-generated hints and solutions for LeetCode problems in real-time.",

    sections: {
      mission: "To supercharge the coding practice workflow by integrating Large Language Models directly into the browser.",
      build: "I reverse-engineered the learning process by building a Chrome Extension that acts as an on-demand tutor.",
      deepDive: "The extension injects a script into the LeetCode DOM, reading the current problem statement. It connects to the OpenAI API, sending the problem context and receiving hints, optimized solutions, or time-complexity breakdowns.",
      tech: "This required managing asynchronous API calls, handling API keys securely, and manipulating the DOM to display the AI's response cleanly within the LeetCode interface without breaking the site's native functionality. It’s a productivity tool built by a dev, for devs. ⚡💻",
      result: "",
    },

    technologies: ["TypeScript", "Chrome Extension API", "OpenAI API", "React"],

    github: "https://github.com/manasviwalia2812/ai-assistant.git",
    blog: null,
    paper: null,
  },

    //duality ai safety project
  {
    slug: "duality-ai-safety",
    title: "Duality AI: Space Station Safety Auditor",
    image: dualityai,

    overview:"(Submission for Hackathon organized by Girls Leading Tech)",

    sections: {
      mission: "In the vacuum of space, safety isn't just a protocol; it's survival. Managing safety equipment in a cluttered, zero-gravity environment is a critical task. This project was built to automate that audit process, creating an AI \"Digital Officer\" that can instantly verify the presence and location of essential safety gear inside a space station.",
      build: "This project sits at the cutting edge of Computer Vision and Synthetic Data.The Training Ground (Synthetic Data): We didn't have a real space station to train on, so we leveraged Duality AI’s Falcon platform. The model was trained on high-fidelity synthetic data, allowing us to simulate complex lighting and object orientations that are difficult to capture in the real world.",
      deepDive: "I engineered the detection system using YOLOv8s (You Only Look Once). This wasn't a standard implementation; it was a game of optimization. Through rigorous fine-tuning and hyperparameter adjustment, I drove the model's accuracy from a baseline of 58.6% up to an outstanding 80.1% mAP@0.5.",
      tech: "A model is only as good as its usability. I built a fully interactive, space-themed web application using Streamlit. The app processes live feeds (webcam) or static images to detect 7 distinct classes of safety equipment instantly.Included dynamic UI elements like confidence sliders, giving users control over the sensitivity of the detection.The entire solution is containerized and deployed live on Render, proving that high-performance AI can be accessible via a standard web browser.",

      result: "The project smashed the challenge benchmark of 40-50%, proving that models trained on synthetic data can achieve high-precision results. It’s a tool designed to keep astronauts safe, powered by code. 🌌🛡️",
    },

    technologies: ["YOLOv8", "PyTorch", "Streamlit", "OpenCV", "Python"],

    github: "https://github.com/manasviwalia2812/hackAura.git",
    blog: null,
    paper: "https://github.com/manasviwalia2812/hackAura/blob/main/Space_Station_Challenge_Report.docx",
    demo: "https://youtu.be/qL7qKDkMSeM?si=xbyFnnU-IANXzM8V",
  },

    //project genesis event platform
  {
    slug: "genesis-event-platform",
    title: "Genesis 4.0 Event Platform",
    image: genesis,

    overview:
      "Website for managing events, registrations, and schedules for annual  technical fest Genesis by IEEE.",

    sections: {
      mission: "",
      build: "",
      deepDive: "",
      tech: "",
      result: "",
    },

    technologies: ["Next.js", "React", "Tailwind CSS", "Firebase/Supabase"],
    github: "https://genesis.ieeemuj.com/",
    blog: null,
    paper: null,
  },

    //femmevoyage project
  {
    slug: "travel-blog-platform",
    title: "FemmeVoyage: Solo Female Travel Platform",
    image: femmevoyage,

    overview:
      "(Winner – Intra-college IEEE WIE Hackathon).",

    sections: {
      mission: "Traveling solo as a woman can be daunting due to safety concerns and a lack of centralized, trusted information. FemmeVoyage was built to bridge this gap, creating a digital sanctuary and planner for the modern female explorer.",
      build: "We built a comprehensive web platform designed with a \"safety-first\" logic.Frontend Mastery was developed using a web stack, the UI is intuitive and engaging (and yes, we nailed that aesthetic!).",
      deepDive: "",
      tech: "The core functionality involves integrating mapping APIs to visualize safe zones and community-rated hostels. We implemented a \"Travel Buddy\" feature to connect travelers, requiring robust backend logic to manage user profiles and secure data.",
      result: "This project wasn't just code; it was a product pitch. Winning the hackathon validated both the technical execution and the social necessity of the solution. It stands as a testament to my ability to build full-stack applications that solve real-world human problems. 🌍💜",
    },

    technologies: ["HTML5", "CSS3", "JavaScript", "Google Maps API"],

    github: "https://github.com/manasviwalia2812/femmevoyage.git",
    blog: null,
    paper: null,
  },


  //amazon ecommerce clone project
  {
    slug: "amazon-ecommerce",
    title: "Amazon E-Commerce Clone",
    image: amazon,

    overview:
      "A full-stack e-commerce platform simulating real-world shopping workflows.",

    sections: {
      mission: "To prove mastery of modern web development, you have to build the titan of the web: Amazon. This project wasn't just about copying a UI; it was about replicating the functionality of a massive e-commerce engine, handling everything from user authentication to payment processing.",
      build: "",
      deepDive: "",
      tech: "",
      result: "The site features a fully responsive design that mimics the Amazon layout pixel-perfectly, complete with product carousels and rating systems. It’s a portfolio piece that says, \"Yes, I can build production-ready apps.\" 📦💳",
    },

    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST API",
      "DOM Manipulation",
    ],

    github: "https://github.com/manasviwalia2812/Amazon-E-commerce-website.git",
    blog: null,
    paper: null,
  },

  //rubiks cube solver project
  {
    slug: "rubiks-cube-solver",
    title: "🧩 AI-Powered Rubik’s Cube Solver",
    image: cube,

    overview:
      "Computer vision system that scans and solves a real-world Rubik’s Cube using optimal algorithms.",

    sections: {
      mission: "I wanted to bridge the gap between physical objects and digital intelligence. The goal? To build an AI that can \"look\" at a scrambled Rubik's Cube in the real world and tell you exactly how to solve it.",
      build: "This project is a marriage of Computer Vision and Algorithmic AI.\n The Eyes (Computer Vision): Using OpenCV, I built a system that captures the cube's state via a webcam. It performs real-time color detection and segmentation to translate the physical cube into a digital 3x3 matrix. This required fine-tuning color thresholds to account for different lighting conditions (shadows and glare).",
      deepDive: "Once the state is captured, the system feeds the data into a solving algorithm (like Kociemba’s algorithm). It calculates the optimal solution—often in under 20 moves—and generates a step-by-step visual guide for the user to follow.",
      tech: "",
      result: "It transforms a chaotic puzzle into an ordered set of instructions in milliseconds. It demonstrates strong competency in image processing and implementing complex logic in Python. 🤖📸",
    },

    technologies: [
      "Python",
      "OpenCV",
      "Kociemba Algorithm",
      "NumPy",
      "Computer Vision",
    ],

    github: "https://github.com/manasviwalia2812/rubiks-cube-solver.git",
    blog: null,
    paper: null,
  },

  //planet simulator project
  {
    slug: "planet-simulator",
    title: "Newtonian Planet Simulator🧑‍🚀",
    image: pygame,

    overview:"A physics-based simulation engine that calculates real-time N-body gravitational forces to visualize accurate planetary orbits in our solar system.",

    sections: {
      mission: "",
      build: "",
      deepDive: "",
      tech: "",
      result: "",
    },

    technologies: ["Python", "Pygame", "Physics Engine", "Math"],
    github: "https://github.com/yourusername/rubiks-solver",
    blog: null,
    paper: null,
  },

  //inventory management system project
  {
    slug: "inventory-management",
    title: "Smart Inventory System",
    image: inventory,

    overview:"An intelligent stock management system that integrates HRMS with inventory tracking. It automates stock alerts and streamlines the supply chain process.",

    sections: {
      mission: "",
      build: "",
      deepDive: "",
      tech: "",
      result: "",
    },

    technologies: ["Python", "MySQL", "React", "Flask/Django"],
    github: "",
    blog: null,
    paper: null,
  },
  // 🔁 Repeat same structure for remaining projects
];
