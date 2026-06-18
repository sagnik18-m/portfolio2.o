import { motion } from "framer-motion";

const skills = [
  "React.js",
  "JavaScript",
  "HTML",
  "CSS",
  "Node.js",
  "MongoDB",
  "MySQL",
  "Python",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 bg-lime-50 overflow-hidden"
    >

      

      <div className="absolute inset-0 opacity-40">
        <div className="h-full w-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-slate-900 mb-16">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              className="
                bg-white/70
                backdrop-blur-xl
                border
                border-slate-200
                rounded-2xl
                shadow-lg
                p-6
                text-center
                font-semibold
                text-slate-800
              "
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}