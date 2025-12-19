import { HERO_CONTENT } from "../constants";
import bg from "../assets/bg.jpg";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

const Hero = () => {
  return (
    <section
      className="relative min-h-screen w-100vw flex items-center justify-center bg-cover bg-center bg-no-repeat pt-24"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl text-center px-6">
        
        <motion.h1
          variants={fadeUp(0)}
          initial="hidden"
          animate="visible"
          className="text-5xl lg:text-7xl font-bold text-white leading-tight"
        >
          Hi, I’m Manasvi
        </motion.h1>

        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          animate="visible"
          className="mt-4 text-2xl lg:text-3xl text-purple-300 font-medium"
        >
          <TypeAnimation
            sequence={[
              "React Developer",
              1500,
              "Frontend Engineer",
              1500,
              "ML & AI Enthusiast",
              1500,
              "Computer Science Student",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          variants={fadeUp(0.8)}
          initial="hidden"
          animate="visible"
          className="mt-8 text-lg lg:text-xl text-neutral-300 leading-relaxed"
        >
          {HERO_CONTENT}
        </motion.p>

        <motion.div
          variants={fadeUp(1.2)}
          initial="hidden"
          animate="visible"
          className="mt-10 flex justify-center gap-6"
        >
          <a
            href="#projects"
            className="rounded-full bg-purple-600 px-8 py-3 text-white text-lg transition hover:bg-purple-700"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="rounded-full border border-purple-400 px-8 py-3 text-white text-lg transition hover:bg-white/70  hover:text-black "
          >
            Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
