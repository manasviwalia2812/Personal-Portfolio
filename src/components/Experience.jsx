import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 relative">

      {/* Heading */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>

      {/* Timeline container */}
      <div className="relative max-w-5xl mx-auto">

        {/* Static timeline line */}
        <div className="absolute left-4 top-0 h-full w-[2px] bg-neutral-800" />

        {/* Animated timeline fill */}
        <motion.div
          className="absolute left-4 top-0 w-[2px] bg-purple-600 origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Experience entries */}
        <div className="space-y-12">
          {EXPERIENCES.map((experience, index) => (
            <div
              key={index}
              className="relative flex flex-wrap lg:justify-center pl-12"
            >
              {/* Timeline dot */}
              <span className="absolute left-[9px] top-2 h-3 w-3 rounded-full bg-purple-600" />

              {/* LEFT — Date & Location */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/4"
              >
                <p className="text-sm text-neutral-400">
                  {experience.year}
                </p>
                <p className="text-xs text-neutral-500 mt-1">
                  {experience.location}
                </p>
              </motion.div>

              {/* RIGHT — Content */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">
                  {experience.role}{" "}
                  <span className="text-sm text-purple-100">
                    @ {experience.company}
                  </span>
                </h6>

                <p className="mb-4 text-neutral-400">
                  {experience.description}
                </p>

                <div className="flex flex-wrap">
                  {experience.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
