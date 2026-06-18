import { motion } from "framer-motion";

const educationData = [
  {
    degree: "B.Tech in Computer Science",
    institute: "The Neotia University",
    year: "2022 - 2026",
    details: "Focused on Web Development, DSA, DBMS, and Software Engineering.",
  },
  {
    degree: "Higher Secondary (Science)",
    institute: "Sarisha High School",
    year: "2020 - 2022",
    details: "Physics, Chemistry, Mathematics, Biology.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-lime-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Education
        </h2>
        
        

        <div className="space-y-6">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 rounded-2xl shadow-md bg-white border-l-4 border-lime-400"
            >
              <h3 className="text-xl font-semibold">{item.degree}</h3>
              <p className="text-gray-600">{item.institute}</p>
              <span className="text-sm text-gray-500">{item.year}</span>
              <p className="mt-2 text-gray-700">{item.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}