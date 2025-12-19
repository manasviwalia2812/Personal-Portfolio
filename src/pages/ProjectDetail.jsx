import { useParams } from "react-router-dom";
import { PROJECTS } from "../constants/projects";
import { motion } from "framer-motion";
import { FaGithub, FaFileAlt, FaPenFancy } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import Contact from "../components/Contact";

/* ------------------ Animations ------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const sectionAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="pt-40 text-center text-neutral-300">
        Project not found
      </div>
    );
  }

  // ✅ FIXED: correct key
  const sections = project.sections || {};

  return (
    <>
      {/* ================= PROJECT DETAIL ================= */}
      <section className="pt-32 pb-32 max-w-7xl mx-auto px-6">

        {/* GRID: 30 | 5 | 65 */}
        <div className="grid md:grid-cols-[30%_5%_65%] items-start">

          {/* LEFT — IMAGE */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="
                w-full h-48 object-cover
                rounded-2xl
                border border-neutral-800
                shadow-lg
              "
            />
            {/* LINKS */}
            <div className="flex flex-wrap gap-4 mt-12">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2
                    rounded-full bg-purple-600
                    px-5 py-2 text-white
                    hover:bg-purple-700 transition
                  "
                >
                  <FaGithub /> Code
                </a>
              )}

              {project.blog && (
                <a
                  href={project.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2
                    rounded-full border border-purple-400
                    px-5 py-2 text-purple-300
                    hover:bg-purple-400/10 transition
                  "
                >
                  <FaPenFancy /> Blog
                </a>
              )}

              {project.paper && (
                <a
                  href={project.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2
                    rounded-full border border-purple-400
                    px-5 py-2 text-purple-300
                    hover:bg-purple-400/10 transition
                  "
                >
                  <FaFileAlt /> Report
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2
                    rounded-full border border-purple-400
                    px-5 py-2 text-purple-300
                    hover:bg-purple-400/10 transition
                  "
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              )}
            </div>
          </motion.div>

          {/* GAP */}
          <div />

          {/* RIGHT — CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-left"
          >
            {/* TITLE */}
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 tracking-wide">
              {project.title}
            </h1>

            {/* OVERVIEW */}
            <p className="text-neutral-300 leading-relaxed mb-6 max-w-2xl">
              {project.overview}
            </p>

            {/* TECHNOLOGIES */}
            <div className="flex flex-wrap gap-2 mb-10">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="
                    text-sm px-3 py-1 rounded-full
                    border border-purple-400/30
                    text-purple-300
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* STORY SECTIONS */}
            <div className="space-y-10 max-w-3xl">

              {sections.mission && (
                <motion.div variants={sectionAnim}>
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">
                    🧠 The Mission
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    {sections.mission}
                  </p>
                </motion.div>
              )}

              {sections.build && (
                <motion.div variants={sectionAnim}>
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">
                    🛠️ The Build
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    {sections.build}
                  </p>
                </motion.div>
              )}

              {sections.deepDive && (
                <motion.div variants={sectionAnim}>
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">
                    🔬 Deep Dive
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    {sections.deepDive}
                  </p>
                </motion.div>
              )}

              {sections.tech && (
                <motion.div variants={sectionAnim}>
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">
                    ⚙️ The Tech
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    {sections.tech}
                  </p>
                </motion.div>
              )}

              {sections.result && (
                <motion.div variants={sectionAnim}>
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">
                    🧬 The Result
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    {sections.result}
                  </p>
                </motion.div>
              )}

            </div>

            

          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <Contact />
    </>
  );
};

export default ProjectDetail;
