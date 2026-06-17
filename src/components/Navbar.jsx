import { useState } from "react";
import { motion } from "framer-motion";



const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <nav
      className="
        fixed
        top-4
        left-1/2
        -translate-x-1/2
        z-50
        bg-white/80
        backdrop-blur-xl
        border
        border-slate-200
        rounded-full
        px-4
        py-2
        shadow-lg
      "
    >
      <ul className="flex gap-2">
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
    </nav>
  );
}