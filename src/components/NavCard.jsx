import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const floating = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const NavCard = ({ image, title, subtitle, route, index }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.15,
            duration: 0.8,
            ease: "easeOut",
          },
        }),
      }}
      custom={index}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.06, rotate: 0.5 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => navigate(route)}
      className="
        relative cursor-pointer rounded-3xl
        border border-neutral-800
        bg-neutral-900/40 backdrop-blur-md
        p-6 flex flex-col items-center text-center
        hover:border-purple-400
        hover:shadow-xl hover:shadow-purple-500/20
        overflow-hidden
      "
    >
      <motion.img
        variants={floating}
        animate="animate"
        src={image}
        alt={title}
        className="relative z-10 mb-6 h-48 object-contain"
      />

      <h3 className="relative z-10 text-xl font-semibold text-neutral-100">
        {title}
      </h3>
      <p className="relative z-10 mt-2 text-sm text-neutral-400">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default NavCard;
