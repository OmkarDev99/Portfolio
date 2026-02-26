import React, { useMemo } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import avator from "../assets/avator.png";

const socials = [
  { Icon: FaXTwitter, label: "X", href: "https://twitter.com" },
  { Icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { Icon: FaGithub, label: "GitHub", href: "https://github.com" },
];

export default function Home() {
  const roles = useMemo(
    () => ["Web Development", "Java FullStack", "Backend Developer"],
    []
  );

  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const current = roles[index];

    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) {
        setSubIndex((v) => v + 1);
      } else if (!deleting && subIndex === current.length) {
        setTimeout(() => setDeleting(true), 1200);
      } else if (deleting && subIndex > 0) {
        setSubIndex((v) => v - 1);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((p) => (p + 1) % roles.length);
      }
    }, deleting ? 70 : 140);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <section
      id="home"
      className="w-full h-screen relative bg-black overflow-hidden"
    >
      <ParticlesBackground />

      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[50vw] h-[50vh] max-w-[400px] max-h-[400px] bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vh] max-w-[400px] max-h-[400px] bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full h-full px-6 sm:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 items-center">

        {/* LEFT CONTENT */}
        <div className="max-w-[34rem] text-center lg:text-left transform lg:-translate-y-6">

          <motion.div className="mb-2 text-lg font-semibold text-white min-h-[1.4em]">
            <span>{roles[index].substring(0, subIndex)}</span>
            <span className="inline-block w-[2px] ml-1 bg-white animate-pulse" style={{ height: "1em" }}></span>
          </motion.div>

          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-[#1cd8d2]">Hello I'm</span>
            <br />
            <span className="text-white text-4xl sm:text-5xl md:text-6xl">
              Omkar Pardeshi
            </span>
          </motion.h1>

          <motion.p className="mt-4 text-sm sm:text-base text-gray-300 max-w-xl">
            I build Web-inspired web experiences — heavy on performance,
            clean UI, and delightful micro-interactions.
          </motion.p>

          <div className="mt-6 flex gap-4 justify-center lg:justify-start">
            <a href="#projects" className="px-5 py-2 rounded-full text-white bg-gradient-to-r from-[#1cd8d2] to-[#302b63]">
              View My Work
            </a>
            <a href="/resume.pdf" download className="px-5 py-2 rounded-full bg-white text-black">
              My Resume
            </a>
          </div>

          <div className="mt-5 flex gap-5 justify-center lg:justify-start">
            {socials.map(({ Icon, label, href }) => (
              <a key={label} href={href} className="text-white text-xl hover:text-[#1cd8d2]">
                <Icon />
              </a>
            ))}
          </div>

        </div>

        {/* RIGHT IMAGE WITH GLOW */}
        <div className="hidden lg:flex justify-center items-center relative">

          {/* Glow */}
          <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] opacity-30 blur-[120px]" />

          {/* Avatar */}
          <motion.img
            src={avator}
            alt="Avatar"
            className="relative w-[min(45vw,560px)] max-h-[88vh] object-contain"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
          />

        </div>

      </div>
    </section>
  );
}
