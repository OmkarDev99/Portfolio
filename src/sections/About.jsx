import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] opacity-10 blur-[120px]" />
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
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mt-6 max-w-3xl mx-auto text-center text-gray-300 text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
        >
          Hi, I’m <span className="text-white font-semibold">Omkar Pardeshi</span>, a passionate
          Full Stack Developer who enjoys building modern, scalable, and visually engaging web
          applications. I focus on creating clean UI, smooth interactions, and performant
          backend systems. I love learning new technologies and turning ideas into real
          digital experiences.
        </motion.p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <motion.div
            className="bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-2xl p-6 text-center hover:border-[#1cd8d2] transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white">Frontend</h3>
            <p className="mt-2 text-gray-400 text-sm">
              Building responsive and interactive UI using React, Tailwind CSS,
              and modern animation libraries.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-2xl p-6 text-center hover:border-[#00bf8f] transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white">Backend</h3>
            <p className="mt-2 text-gray-400 text-sm">
              Developing robust backend systems using Java, Spring Boot, and
              database technologies.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-2xl p-6 text-center hover:border-[#302b63] transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white">Problem Solver</h3>
            <p className="mt-2 text-gray-400 text-sm">
              Passionate about solving real-world problems and continuously
              improving through learning and building projects.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
