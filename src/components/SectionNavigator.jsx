import { motion } from "framer-motion";
import NavCard from "./NavCard";

import sec1 from "../assets/sec1.png";
import sec2 from "../assets/sec2.png";
import sec3 from "../assets/sec3.png";
import sec4 from "../assets/sec4.png";
import sec5 from "../assets/sec5.png";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const SectionNavigator = () => {
  const sections = [
    {
      image: sec1,
      title: "Projects 🚀",
      subtitle: "Things I’ve built and shipped 🛠️",
      targetId: "projects",
    },
    {
      image: sec2,
      title: "Experience 💼",
      subtitle: "Where I’ve worked & learned 🧠",
      targetId: "experience",
    },
    {
      image: sec3,
      title: "Tech Stack 💻",
      subtitle: "Tools & technologies I use ⚡",
      targetId: "technologies",
    },
    {
      image: sec4,
      title: "Blogs ✍️",
      subtitle: "Thoughts, learnings & notes 📝",
      targetId: "blogs",
    },
    {
      image: sec5,
      title: "Contact 📬",
      subtitle: "Let’s connect & collaborate 👋",
      targetId: "contact",
    },
  ];

  return (
    <section className="py-36">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-24 text-center text-4xl lg:text-5xl tracking-widest text-neutral-200"
      >
        EXPLORE <span className="text-purple-400">SECTIONS</span>
      </motion.h2>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="
          mx-auto
          grid
          max-w-6xl
          grid-cols-1
          gap-12
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {sections.map((section, index) => (
          <NavCard key={section.title} index={index} {...section} />
        ))}
      </motion.div>
    </section>
  );
};

export default SectionNavigator;
