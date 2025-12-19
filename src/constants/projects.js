import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-2.jpg";
import project6 from "../assets/projects/project-2.jpg";
import project7 from "../assets/projects/project-2.jpg";
import project8 from "../assets/projects/project-2.jpg";
import project9 from "../assets/projects/project-2.jpg";
import project10 from "../assets/projects/project-1.jpg";
import project11 from "../assets/projects/project-1.jpg";

export const PROJECTS = [
  {
    slug: "brain-tumor-segmentation",
    title: "Brain Tumor Segmentation using Deep Learning (BraTS)",
    image: project5,

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

  {
    slug: "amazon-ecommerce",
    title: "Amazon E-Commerce Clone",
    image: project1,

    overview:
      "A full-stack e-commerce platform simulating real-world shopping workflows.",

    sections: {
      mission: "",
      build: "",
      deepDive: "",
      tech: "",
      result: "",
    },

    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST API",
      "DOM Manipulation",
    ],

    github: "https://github.com/yourusername/amazon-clone",
    blog: null,
    paper: null,
  },

  {
    slug: "rubiks-cube-solver",
    title: "AI Rubik’s Cube Solver",
    image: project9,

    overview:
      "Computer vision system that scans and solves a real-world Rubik’s Cube using optimal algorithms.",

    sections: {
      mission: "",
      build: "",
      deepDive: "",
      tech: "",
      result: "",
    },

    technologies: [
      "Python",
      "OpenCV",
      "Kociemba Algorithm",
      "NumPy",
      "Computer Vision",
    ],

    github: "https://github.com/yourusername/rubiks-solver",
    blog: null,
    paper: null,
  },

  // 🔁 Repeat same structure for remaining projects
];
