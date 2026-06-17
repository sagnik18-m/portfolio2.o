import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 bg-slate-50 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="
            h-full
            w-full
            bg-[radial-gradient(#cbd5e1_1px,transparent_1px)]
            bg-[size:30px_30px]
          "
        />
      </div>

      {/* Gradient Blobs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-5xl
            font-bold
            text-center
            text-slate-900
            mb-16
          "
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            bg-white/70
            backdrop-blur-xl
            border
            border-slate-200
            rounded-3xl
            shadow-xl
            p-10
            md:p-14
          "
        >
          <p className="text-lg text-slate-600 leading-relaxed">
            I am <span className="font-semibold text-blue-600">Sagnik Mondal</span>,
            a B.Tech Computer Science student specializing in Cyber Security at
            The Neotia University. I am passionate about Frontend Development,
            React.js, JavaScript, and creating modern, responsive web applications.
          </p>

          <p className="text-lg text-slate-600 leading-relaxed mt-6">
            I have completed internships in Cyber Security and Backend Development,
            gaining experience in Cryptographic Hashing, Symmetric Encryption,
            Node.js, and secure application development.
          </p>

          <p className="text-lg text-slate-600 leading-relaxed mt-6">
            My goal is to build beautiful user experiences while continuously
            improving my skills in modern web technologies.
          </p>
        </motion.div>

      </div>
    </section>
  );
}