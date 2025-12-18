import aboutImg from "../assets/aboutsec.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen flex items-center">

      <div className="w-full">

        {/* Heading */}
        <h1 className="text-4xl lg:text-5xl mb-20 text-center tracking-widest text-neutral-200">
          WHO I <span className="text-purple-400">AM</span>
        </h1>

        <div className="flex flex-wrap items-start justify-center gap-y-16 gap-x-24">

          {/* IMAGE */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[35%] flex justify-center"
          >
            <div className="rounded-2xl bg-purple-500/10 backdrop-blur-md border border-purple-400/20 shadow-[0_0_35px_rgba(168,85,247,0.25)] p-3">
              <img
                src={aboutImg}
                alt="About illustration"
                className="rounded-xl max-w-full"
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[50%]"
          >
            <div className="max-w-xl text-xl lg:text-2xl leading-[1.8] text-neutral-200 space-y-10">

              <p>
                I’m a motivated{" "}
                <span className="text-purple-400 font-medium">
                  Computer Science student
                </span>{" "}
                with a strong academic background and a deep interest in{" "}
                <span className="text-purple-400 font-medium">
                  building impactful software 💻✨
                </span>.
              </p>

              <p>
                I enjoy working with{" "}
                <span className="text-purple-400 font-medium">
                  React, Next.js, and Python 🐍
                </span>{" "}
                and I’m currently exploring{" "}
                <span className="text-purple-400 font-medium">
                  full-stack development
                </span>{" "}
                while strengthening my foundations in{" "}
                <span className="text-purple-400 font-medium">
                  problem solving and system design
                </span>.
              </p>

              <p>
                I’m eager to grow in a{" "}
                <span className="text-purple-400 font-medium">
                  dynamic environment
                </span>, contribute to{" "}
                <span className="text-purple-400 font-medium">
                  meaningful projects
                </span>, and collaborate in{" "}
                <span className="text-purple-400 font-medium">
                  open-source communities
                </span>{" "}
                where learning never stops.
              </p>

            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default About;
