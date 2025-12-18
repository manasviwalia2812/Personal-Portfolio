import { motion } from "framer-motion";

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

const NavCard = ({ image, title, subtitle, targetId, index }) => {
  const handleClick = () => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      whileHover={{
        scale: 1.06,
        rotate: 0.5,
      }}
      whileTap={{ scale: 0.97 }}
      onClick={handleClick}
      className="
        relative
        cursor-pointer
        rounded-3xl
        border border-neutral-800
        bg-neutral-900/40
        backdrop-blur-md
        p-6
        transition
        hover:border-purple-400
        hover:shadow-xl hover:shadow-purple-500/20
        flex flex-col items-center text-center
        overflow-hidden
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500">
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 blur-xl" />
      </div>

      {/* Illustration */}
      <motion.img
        variants={floating}
        animate="animate"
        src={image}
        alt={title}
        className="relative z-10 mb-6 h-48 w-auto object-contain"
      />

      {/* Title */}
      <h3 className="relative z-10 text-xl font-semibold tracking-wide text-neutral-100">
        {title}
      </h3>

      {/* Subtitle */}
      <p className="relative z-10 mt-2 text-sm text-neutral-400">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default NavCard;
