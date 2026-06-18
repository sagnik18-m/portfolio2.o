import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden flex items-center py-20"
    >
      {/* Video Background */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video> */}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Glow Effects */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-medium mb-3">
            👨‍💻 Get To Know Me
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            About
            <span className="block text-cyan-400">
              Me
            </span>
          </h2>
        </motion.div>

        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            rounded-3xl
            shadow-2xl
            p-8
            md:p-14
          "
        >
          <p className="text-lg text-slate-200 leading-relaxed">
            I am{" "}
            <span className="font-semibold text-cyan-400">
              Sagnik Mondal
            </span>
            , a B.Tech Computer Science student specializing in
            Cyber Security at The Neotia University. I am passionate
            about Frontend Development, React.js, JavaScript, and
            creating modern, responsive web applications.
          </p>

          <p className="text-lg text-slate-200 leading-relaxed mt-6">
            I have completed internships in Cyber Security and
            Backend Development, gaining hands-on experience in
            Cryptographic Hashing, Symmetric Encryption, Node.js,
            secure application development, and modern software
            engineering practices.
          </p>

          <p className="text-lg text-slate-200 leading-relaxed mt-6">
            My goal is to build beautiful user experiences while
            continuously improving my skills in React, JavaScript,
            Cyber Security, and Full Stack Development.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">

            <div
              className="
                bg-white/10
                border
                border-white/20
                rounded-2xl
                p-6
                text-center
              "
            >
              <h3 className="text-3xl font-bold text-cyan-400">
                10+
              </h3>
              <p className="text-slate-300 mt-2">
                Projects
              </p>
            </div>

            <div
              className="
                bg-white/10
                border
                border-white/20
                rounded-2xl
                p-6
                text-center
              "
            >
              <h3 className="text-3xl font-bold text-cyan-400">
                2+
              </h3>
              <p className="text-slate-300 mt-2">
                Internships
              </p>
            </div>

            <div
              className="
                bg-white/10
                border
                border-white/20
                rounded-2xl
                p-6
                text-center
              "
            >
              <h3 className="text-3xl font-bold text-cyan-400">
                5+
              </h3>
              <p className="text-slate-300 mt-2">
                Technologies
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}