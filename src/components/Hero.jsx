import { TypeAnimation } from "react-type-animation";
import myPhoto from "../assets/myphoto.png";
import { motion } from "framer-motion";
import { Download, ArrowRight, Sparkles } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const skills = [
  "Information Systems",
  "Full Stack Development",
  "Database Design",
  "System Analysis",
  "UI/UX Design",
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-neutral-950 px-5 py-24 text-white sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:44px_44px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_38%),linear-gradient(to_bottom,transparent,rgba(10,10,10,0.92))]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div className="text-center lg:text-left">
          <motion.div
            variants={item}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-lg border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 lg:mx-0"
          >
            <Sparkles size={16} />
            Welcome To My Portfolio
          </motion.div>

          <motion.h1
            variants={item}
            className="mx-auto max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:mx-0 lg:text-7xl"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-emerald-300 bg-clip-text text-transparent">
              AbdulRahman Himat
            </span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-5 min-h-10 text-xl font-bold text-gray-100 sm:text-2xl md:text-4xl"
          >
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1800,
                "Information Systems Graduate",
                1800,
                "Desktop Application Developer",
                1800,
                "System & Database Designer",
                1800,
              ]}
              speed={45}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            variants={item}
            className="mx-auto mt-7 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg lg:mx-0"
          >
            I build modern web applications, enterprise systems, and scalable
            digital solutions with a strong foundation in software development,
            databases, business processes, system analysis, and user-centered
            design.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start"
          >
            
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-bold text-neutral-950 shadow-lg shadow-cyan-400/20 transition hover:-translate-y-1 hover:bg-cyan-300"
            >
              Hire Me
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] px-6 py-3 font-bold text-white transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-300/10"
            >
              View Projects
            </a>

            <a
              href="/AbdulRahman-Himat-CV.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-6 py-3 font-bold text-white transition hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-300/10"
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
          className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg"
        >
          <div className="relative aspect-square overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-cyan-950/40">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="h-full overflow-hidden rounded-lg bg-neutral-900"
            >
              <img
                src={myPhoto}
                alt="AbdulRahman Himat"
                className="h-full w-full object-cover"
              />
            </motion.div>

            <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/10 bg-neutral-950/80 px-4 py-3 backdrop-blur">
              <p className="text-sm font-semibold text-white">
                Available for professional projects
              </p>
              <p className="mt-1 text-xs text-gray-400">
                Web apps, databases, systems, and UI design
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-sm font-medium text-gray-500 transition hover:text-cyan-300 md:block"
      >
        Scroll Down
      </motion.a>
    </section>
  );
};

export default Hero;