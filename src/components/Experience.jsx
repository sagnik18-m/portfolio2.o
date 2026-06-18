import { motion } from "framer-motion";

const experienceData = [
  {
    role: "AILABS| Internship Backend using node.js",
    company: "AILABS",
    duration: "June 2025 - Aug 2025",
    work: "Built responsive UI using React, improved performance and worked on API integration.",
  },
  {
    role: "Cyber Security Intern| Webel Education & Training",
    company: "Intern",
    duration: "Jun’21 - Jul’15 2024",
    work: "Project on Cryptographic Hashing and Symmetric Encryption.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-lime-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Experience
        </h2>

        

        <div className="space-y-6">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 rounded-2xl shadow-md bg-white border-l-4 border-lime-500"
            >
              <h3 className="text-xl font-semibold">{item.role}</h3>
              <p className="text-gray-600">{item.company}</p>
              <span className="text-sm text-gray-500">{item.duration}</span>
              <p className="mt-2 text-gray-700">{item.work}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}