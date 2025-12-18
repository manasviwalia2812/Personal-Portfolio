import {
  RiReactjsLine
} from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiFlutter, SiTypescript, SiAmazonaws } from "react-icons/si";
import { SiSimpleanalytics } from "react-icons/si";
import { MdArchitecture } from "react-icons/md";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker
} from "react-icons/fa";
import {
  DiJavascript1,
  DiPython,
  DiMongodb
} from "react-icons/di";
import {
  SiPostman,
  SiExpress,
  SiTailwindcss,
  SiFramer,
  SiMysql,
  SiPostgresql,
  SiNumpy,
  SiPandas,
  SiTensorflow
} from "react-icons/si";
import { motion } from "framer-motion";

/* Floating animation */
const iconVariants = (duration) => ({
  initial: { y: -8 },
  animate: {
    y: [8, -8],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

/* Reusable icon with tooltip */
const TechIcon = ({ icon: Icon, color, label, duration }) => (
  <motion.div
    variants={iconVariants(duration)}
    initial="initial"
    animate="animate"
    className="relative group flex flex-col items-center rounded-2xl border border-neutral-800 p-4 hover:border-purple-400 transition"
  >
    <Icon className={`text-6xl ${color}`} />

    {/* Tooltip */}
    <span className="
      pointer-events-none absolute -bottom-10
      rounded-md bg-black/70 px-2 py-1
      text-[11px] text-purple-300 backdrop-blur-sm
      opacity-0 group-hover:opacity-100
      transition-all duration-300
    ">
      {label}
    </span>
  </motion.div>
);

/* Category wrapper */
const TechCategory = ({ title, children }) => (
  <div className="mb-20">
    <h3 className="mb-8 text-center text-xl tracking-wider text-neutral-300">
      <span className="text-purple-400">{title}</span>
    </h3>
    <div className="flex flex-wrap justify-center gap-6">
      {children}
    </div>
  </div>
);

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-32">

      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -60 }}
        transition={{ duration: 1 }}
        className="text-4xl lg:text-5xl mb-24 text-center tracking-widest text-neutral-200"
      >
        TECH <span className="text-purple-400">STACK</span>
      </motion.h2>

      <div className="max-w-6xl mx-auto px-6">

        {/* Frontend */}
        <TechCategory title="Frontend">
          <TechIcon icon={RiReactjsLine} color="text-cyan-400" label="React" duration={2.5} />
          <TechIcon icon={TbBrandNextjs} color="text-white" label="Next.js" duration={3} />
          <TechIcon icon={FaHtml5} color="text-orange-500" label="HTML5" duration={2.2} />
          <TechIcon icon={FaCss3Alt} color="text-blue-500" label="CSS3" duration={2.8} />
          <TechIcon icon={DiJavascript1} color="text-yellow-400" label="JavaScript" duration={3.2} />
          <TechIcon icon={SiTailwindcss} color="text-sky-400" label="Tailwind CSS" duration={2.4} />
          <TechIcon icon={SiFramer} color="text-purple-400" label="Framer Motion" duration={3} />
        </TechCategory>

        {/* Backend */}
        <TechCategory title="Backend">
          <TechIcon icon={FaNodeJs} color="text-green-500" label="Node.js" duration={2.6} />
          <TechIcon icon={SiExpress} color="text-neutral-300" label="Express.js" duration={3.1} />
        </TechCategory>

        {/* Databases */}
        <TechCategory title="Databases">
          <TechIcon icon={DiMongodb} color="text-green-600" label="MongoDB" duration={2.4} />
          <TechIcon icon={SiMysql} color="text-blue-400" label="MySQL" duration={3} />
          <TechIcon icon={SiPostgresql} color="text-sky-500" label="PostgreSQL" duration={2.8} />
        </TechCategory>

        {/* Tools */}
        <TechCategory title="Tools & DevOps">
          <TechIcon icon={FaGitAlt} color="text-orange-500" label="Git" duration={2.3} />
          <TechIcon icon={FaGithub} color="text-white" label="GitHub" duration={3.4} />
          <TechIcon icon={SiPostman} color="text-orange-400" label="Postman" duration={2} />
          <TechIcon icon={FaDocker} color="text-sky-400" label="Docker" duration={3.6} />
        </TechCategory>

        {/* ML / Data */}
        <TechCategory title="ML & Data">
          <TechIcon icon={DiPython} color="text-yellow-400" label="Python" duration={2.7} />
          <TechIcon icon={SiNumpy} color="text-blue-300" label="NumPy" duration={3.1} />
          <TechIcon icon={SiPandas} color="text-indigo-400" label="Pandas" duration={2.8} />
          <TechIcon icon={SiTensorflow} color="text-orange-400" label="TensorFlow" duration={3.5} />
        </TechCategory>
        {/* Currently Learning */}
        <TechCategory title="Currently Learning">
          <TechIcon
            icon={SiSimpleanalytics}
            color="text-blue-400"
            label="SAS (Analytics)"
            duration={2.6}
          />
          <TechIcon
            icon={SiFlutter}
            color="text-sky-400"
            label="Flutter"
            duration={3}
          />
          <TechIcon
            icon={SiTypescript}
            color="text-blue-500"
            label="TypeScript"
            duration={2.8}
          />
          <TechIcon
            icon={SiAmazonaws}
            color="text-orange-400"
            label="AWS (Fundamentals)"
            duration={3.4}
          />
          <TechIcon
            icon={MdArchitecture}
            color="text-purple-400"
            label="System Design (Basics)"
            duration={3.2}
          />
        </TechCategory>


      </div>
    </div>
  );
};

export default Technologies;
