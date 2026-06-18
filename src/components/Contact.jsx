import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Contact() {
  return (

    
    <section
      id="contact"
      className="relative py-20 bg-lime-50 overflow-hidden"
    >

      
      <div className="absolute inset-0 opacity-40">
        <div className="h-full w-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-slate-900 mb-16">
          Contact Me
        </h2>

        <motion.div
          whileHover={{ y: -5 }}
          className="
            bg-white/70
            backdrop-blur-xl
            border
            border-slate-200
            rounded-3xl
            shadow-xl
            p-10
          "
        >
          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-600 text-2xl" />
              <span className="text-slate-700 text-lg">
                sagnik99333@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-blue-600 text-2xl" />
              <span className="text-slate-700 text-lg">
                +91 99333 56778
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}