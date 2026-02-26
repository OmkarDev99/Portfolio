import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern personal portfolio built with React, Tailwind CSS, and Framer Motion showcasing my skills and projects.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "#",
    live: "#",
  },
  {
    title: "AI Disease Prediction Chatbot",
    description:
      "An AI-powered chatbot that predicts diseases based on symptoms using machine learning models.",
    tech: ["Python", "ML", "Flask"],
    github: "#",
    live: "#",
  },
  {
    title: "Breed Prediction System",
    description:
      "Breedprediction is a machine-learning project that predicts the breed of a dog from an input (likely an image or dataset) using Python",
    tech: ["Python", "React", "ML"],
    github: "https://github.com/OmkarDev99/Breedprediction.git",
    live: "#",
  },
  {
    title: "Google Secure Extension",
    description:
      "Google Secure Extension is an AI-powered browser extension that detects phishing websites in real time. It analyzes website features using a Machine Learning model and alerts users if a site is potentially malicious",
    tech: ["Python", "Flask", "Javascript","Chrome Extension APIs"
      ,"React"
    ],
    github: "#",
    live: "#",
  },
];

export default function Project() {
  return (
    <section
      id="projects"
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
          Projects
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mt-6 max-w-3xl mx-auto text-center text-gray-300 text-base sm:text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
        >
          Here are some of the projects I’ve worked on showcasing my skills in
          frontend, backend, and full stack development.
        </motion.p>

        {/* Project Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-2xl p-6 hover:border-[#1cd8d2] transition flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Title */}
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-400 text-sm flex-grow">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-gray-800 px-2 py-1 rounded-md text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-3">
                <a
                  href={project.github}
                  className="flex-1 text-center px-3 py-2 text-sm rounded-md bg-gray-800 hover:bg-gray-700 transition"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  className="flex-1 text-center px-3 py-2 text-sm rounded-md bg-gradient-to-r from-[#1cd8d2] to-[#302b63]"
                >
                  Live
                </a>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
