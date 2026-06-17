import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.jpeg";

// Icons (you can also use react-icons if you want)
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-slate-50 overflow-hidden flex items-center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="h-full w-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      {/* Gradient Blobs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-blue-600 font-medium mb-4"
            >
              👋 Welcome To My Portfolio
            </motion.p>

            {/* NAME */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-6xl md:text-7xl font-extrabold leading-tight text-slate-900"
            >
              Sagnik
              <span className="block text-blue-600">Mondal</span>
            </motion.h1>

            {/* ANIMATED ROLE */}
            <div className="mt-6">
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "React Developer",
                  2000,
                  "JavaScript Developer",
                  2000,
                  "Cyber Security Student",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                className="text-2xl md:text-3xl font-semibold text-slate-700"
              />
            </div>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed"
            >
              Passionate Frontend Developer specializing in React.js, JavaScript and modern web technologies.
              I enjoy creating responsive, user-friendly and visually appealing web applications.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col gap-5 mt-10"
            >
              {/* Buttons */}
              <div className="flex gap-4 flex-wrap">
                <button className="px-7 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition shadow-lg">
                  Download Resume
                </button>

                <button className="px-7 py-3 rounded-xl border border-slate-300 hover:bg-white transition">
                  Contact Me
                </button>
              </div>

              {/* SOCIAL ICONS */}
              <div className="flex gap-5 mt-2">
                <a
                  href="https://www.linkedin.com/in/sagnik-mondal-20071b240?utm_source=share_via&utm_content=profile&utm_medium=member_androidhttps://linkedin.com"
                  target="_blank"
                  className="text-slate-600 hover:text-blue-600 text-2xl transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://www.facebook.com/share/1BKnhPJjJ5/"
                  target="_blank"
                  className="text-slate-600 hover:text-blue-700 text-2xl transition"
                >
                  <FaFacebook />
                </a>

                <a
                  href="https://www.instagram.com/sagnik_mondal.18?igsh=bTl0NWk3cGdzMXFy"
                  target="_blank"
                  className="text-slate-600 hover:text-pink-500 text-2xl transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-blue-300 blur-3xl opacity-30 scale-110" />

              {/* Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-300 animate-pulse" />

              <motion.img
                src={profile}
                alt="Sagnik Mondal"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-90 h-90 md:w-100 md:h-96 object-cover rounded-full border-4 border-white shadow-2xl"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}