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
      className="relative min-h-screen overflow-hidden flex items-center pt-24 lg:pt-0"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Glow Effects */}
      <div className="absolute top-20 left-10 md:left-20 w-72 md:w-96 h-72 md:h-96 bg-blue-500 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-10 md:right-20 w-72 md:w-96 h-72 md:h-96 bg-cyan-500 rounded-full blur-3xl opacity-20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Profile Image */}
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
              <div className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl opacity-30 scale-110" />

              {/* Animated Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-pulse" />

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

          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-cyan-400 font-medium mb-4 text-lg"
            >
              👋 Welcome To My Portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-extrabold
                leading-tight
                text-white
              "
            >
              Sagnik
              <span className="block text-cyan-400">
                Mondal
              </span>
            </motion.h1>

            {/* Typing Animation */}
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
                  text-slate-200
                "
              />
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="
                mt-6
                text-base
                md:text-lg
                text-slate-300
                max-w-xl
                mx-auto
                lg:mx-0
                leading-relaxed
              "
            >
              Passionate Frontend Developer specializing in React.js,
              JavaScript and modern web technologies. I enjoy creating
              responsive, user-friendly and visually appealing web
              applications with modern UI/UX principles.
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
                      bg-cyan-500
                      text-white
                      hover:bg-cyan-600
                      hover:scale-105
                      active:scale-95
                      transition-all
                      duration-300
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
                    border-white/30
                    text-white
                    hover:bg-white
                    hover:text-black
                    hover:scale-105
                    active:scale-95
                    transition-all
                    duration-300
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
                  className="text-white hover:text-cyan-400 text-2xl transition duration-300"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://www.facebook.com/share/1BKnhPJjJ5/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-blue-500 text-2xl transition duration-300"
                >
                  <FaFacebook />
                </a>

                <a
                  href="https://www.instagram.com/sagnik_mondal.18"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-pink-500 text-2xl transition duration-300"
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