import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.jpeg";

import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-slate-50 overflow-hidden flex items-center pt-24 md:pt-0"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="h-full w-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      {/* Background Blobs */}
      <div className="absolute top-20 left-10 md:left-20 w-72 md:w-96 h-72 md:h-96 bg-blue-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-10 md:right-20 w-72 md:w-96 h-72 md:h-96 bg-cyan-200 rounded-full blur-3xl opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* IMAGE FIRST ON MOBILE */}
          <div className="flex justify-center order-1 lg:order-2">

            <motion.div
              animate={{ y: [0, -15, 0] }}
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
                className="
                  relative
                  w-64
                  h-64
                  sm:w-72
                  sm:h-72
                  md:w-80
                  md:h-80
                  lg:w-96
                  lg:h-96
                  rounded-full
                  object-cover
                  border-4
                  border-white
                  shadow-2xl
                "
              />
            </motion.div>
          </div>

          {/* CONTENT */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-blue-600 font-medium mb-4"
            >
              👋 Welcome To My Portfolio
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-extrabold
                leading-tight
                text-slate-900
              "
            >
              Sagnik
              <span className="block text-blue-600">
                Mondal
              </span>
            </motion.h1>

            <div className="mt-5 min-h-[50px]">
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
                className="
                  text-xl
                  sm:text-2xl
                  md:text-3xl
                  font-semibold
                  text-slate-700
                "
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="
                mt-6
                text-base
                md:text-lg
                text-slate-600
                max-w-xl
                mx-auto
                lg:mx-0
                leading-relaxed
              "
            >
              Passionate Frontend Developer specializing in React.js,
              JavaScript and modern web technologies. I enjoy creating
              responsive, user-friendly and visually appealing web
              applications.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-10"
            >
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">

                <a href="/cv.pdf" download>
                  <button
                    className="
                      px-7
                      py-3
                      rounded-xl
                      bg-blue-600
                      text-white
                      hover:bg-blue-700
                      transition
                      shadow-lg
                      cursor-pointer
                    "
                  >
                    Download Resume
                  </button>
                </a>

                <button
                  onClick={() => {
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                  className="
                    px-7
                    py-3
                    rounded-xl
                    border
                    border-slate-300
                    hover:bg-white
                    transition
                    cursor-pointer
                  "
                >
                  Contact Me
                </button>

              </div>

              {/* Social Icons */}
              <div className="flex justify-center lg:justify-start gap-6 mt-8">

                <a
                  href="https://www.linkedin.com/in/sagnik-mondal-20071b240"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-600 hover:text-blue-600 text-2xl transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://www.facebook.com/share/1BKnhPJjJ5/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-600 hover:text-blue-700 text-2xl transition"
                >
                  <FaFacebook />
                </a>

                <a
                  href="https://www.instagram.com/sagnik_mondal.18"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-600 hover:text-pink-500 text-2xl transition"
                >
                  <FaInstagram />
                </a>

              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}