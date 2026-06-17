import { motion } from "framer-motion";

const projects = [
  {
    title: "Phishing URL Detection",
    desc: "Machine Learning based phishing detection system.",
  },
  {
    title: "Portfolio Website",
    desc: "Modern React portfolio website.",
  },
  {
    title: "Banking Website",
    desc: "Responsive banking landing page.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 bg-lime-50 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-40">
        <div className="h-full w-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-slate-900 mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="
                bg-white/70
                backdrop-blur-xl
                border
                border-slate-200
                rounded-3xl
                shadow-xl
                p-8
              "
            >
              <h3 className="text-2xl font-bold text-slate-900">
                {project.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {project.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}