import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaChevronDown,
  FaHome,
  FaFileAlt,
  FaBlog,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import profileIcon from "../assets/icon.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  /* ---------- SMART NAV HANDLER ---------- */
  const goTo = (id, route) => {
    setOpen(false);

    if (location.pathname === "/" && id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(route);
    }
  };

  /* ---------- UI Components ---------- */
  const NavItem = ({ label, icon }) => (
    <span
      className="flex items-center gap-2 relative text-white cursor-pointer
      after:absolute after:left-0 after:-bottom-1 after:h-[2px]
      after:w-0 after:bg-purple-400 after:transition-all after:duration-300
      hover:after:w-full"
    >
      {icon}
      {label}
    </span>
  );

  const DropdownItem = ({ label, onClick }) => (
    <button
      onClick={onClick}
      className="w-full text-left px-4 py-3 text-sm text-white
      hover:text-purple-400 hover:bg-purple-400/10 transition"
    >
      {label}
    </button>
  );

  const MobileItem = ({ label, onClick }) => (
    <button
      onClick={onClick}
      className="block w-full text-left py-2 text-white hover:text-purple-400 transition"
    >
      {label}
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT — PROFILE ICON */}
        <button onClick={() => navigate("/profile")}>
          <img
            src={profileIcon}
            alt="Profile"
            className="h-12 w-12 rounded-full border-2 border-purple-400
            hover:scale-110 transition"
          />
        </button>

        {/* CENTER — DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10 text-lg">

          <button onClick={() => navigate("/")}>
            <NavItem label="Home" icon={<FaHome />} />
          </button>

          <button onClick={() => navigate("/blogs")}>
            <NavItem label="Blogs" icon={<FaBlog />} />
          </button>

          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <NavItem label="Resume" icon={<FaFileAlt />} />
          </a>

          {/* SECTIONS DROPDOWN */}
          <div className="relative group">
            <div className="flex items-center gap-2 cursor-pointer text-white">
              <NavItem label="Sections" icon={<FaChevronDown />} />
            </div>

            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
              <div
                className="w-48 rounded-xl bg-neutral-900/90 backdrop-blur-md
                opacity-0 group-hover:opacity-100
                pointer-events-none group-hover:pointer-events-auto
                transition-all duration-300"
              >
                <DropdownItem
                  label="Projects"
                  onClick={() => goTo("projects", "/projects")}
                />
                <DropdownItem
                  label="Experience"
                  onClick={() => goTo("experience", "/experience")}
                />
                <DropdownItem
                  label="Tech Stack"
                  onClick={() => goTo("tech", "/")}
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — SOCIAL ICONS */}
        <div className="hidden md:flex items-center gap-6 text-2xl text-white">
          <a href="https://www.linkedin.com/in/manasvi-walia-9516442a8" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-purple-400 transition" />
          </a>
          <a href="https://github.com/manasviwalia2812/" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-purple-400 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-purple-400 transition" />
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-md px-6 pb-6 space-y-4 text-lg">
          <MobileItem label="Home" onClick={() => navigate("/")} />
          <MobileItem label="Blogs" onClick={() => navigate("/blogs")} />
          <MobileItem label="Resume" onClick={() => window.open("/resume.pdf")} />
          <MobileItem label="Projects" onClick={() => goTo("projects", "/projects")} />
          <MobileItem label="Experience" onClick={() => goTo("experience", "/experience")} />
          <MobileItem label="Tech Stack" onClick={() => navigate("/")} />

          <div className="flex gap-6 pt-4 text-2xl text-white">
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
