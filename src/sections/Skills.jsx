import { motion } from "framer-motion";

const skills = [
  { name: "React", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "Java", level: "Intermediate" },
  { name: "Spring Boot", level: "Intermediate" },
  { name: "MySQL", level: "Intermediate" },
  { name: "Node.js", level: "Intermediate" },
  { name: "Git & GitHub", level: "Advanced" },
  { name: "REST APIs", level: "Intermediate" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] opacity-10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mt-6 max-w-3xl mx-auto text-center text-gray-300 text-base sm:text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
        >
          Here are some of the technologies and tools I use to build modern,
          scalable, and high-performance applications.
        </motion.p>

        {/* Skills Grid */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-xl p-5 text-center hover:border-[#1cd8d2] transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold">{skill.name}</h3>
              <p className="text-xs text-gray-400 mt-1">{skill.level}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
