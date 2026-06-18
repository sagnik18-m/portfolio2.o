import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="
        fixed
        top-4
        left-1/2
        -translate-x-1/2
        z-50
        w-[95%]
        max-w-5xl
        bg-white/80
        backdrop-blur-xl
        border
        border-slate-200
        rounded-2xl
        shadow-lg
      "
    >
      <div className="flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <a
          href="#hero"
          className="text-xl md:text-2xl font-bold text-blue-600"
        >
          Sagnik
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setActive(link.name)}
                className="relative px-5 py-2 rounded-full"
              >
                {active === link.name && (
                  <motion.div
                    layoutId="active-pill"
                    className="
                      absolute
                      inset-0
                      bg-blue-600
                      rounded-full
                    "
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                  />
                )}

                <span
                  className={`relative z-10 ${
                    active === link.name
                      ? "text-white"
                      : "text-slate-700"
                  }`}
                >
                  {link.name}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-700 text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              md:hidden
              overflow-hidden
              border-t
              border-slate-200
            "
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActive(link.name);
                  setMenuOpen(false);
                }}
                className={`
                  block
                  px-6
                  py-4
                  transition
                  ${
                    active === link.name
                      ? "bg-blue-600 text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }
                `}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}