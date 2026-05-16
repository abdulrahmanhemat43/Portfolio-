import { TypeAnimation } from "react-type-animation";
import myPhoto from "../assets/myphoto.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
           <img
          src={myPhoto}
          alt="AbdulRahman Himat"
         className="w-40 h-40 mx-auto rounded-full border-4 border-cyan-400 object-cover shadow-lg shadow-cyan-500/30"
        />
        <h1 className="text-5xl md:text-7xl font-extrabold">
          AbdulRahman Himat
        </h1>

        <h2 className="text-cyan-400 text-2xl md:text-4xl mt-4">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "Information Systems Specialist",
              2000,
              "Desktop Application Developer",
              2000
            ]}
            repeat={Infinity}
          />
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-gray-400">
          I design and develop scalable web systems, desktop applications,
          and enterprise Information Systems with modern architecture and clean UI.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

  {/* Hire Me */}
  <a
    href="#contact"
    className="px-6 py-3 bg-cyan-500 text-black rounded-xl hover:scale-105 transition"
  >
    Hire Me
  </a>

  {/* Projects */}
  <a
    href="#projects"
    className="px-6 py-3 border border-cyan-400 rounded-xl hover:bg-cyan-500/10 transition"
  >
    View Projects
  </a>

  {/* Download CV */}
  <a
    href="/AbdulRahman-Himat-CV.pdf"
    download
    className="px-6 py-3 bg-white/10 border border-gray-700 rounded-xl hover:border-cyan-400 hover:bg-cyan-500/10 transition"
  >
    Download CV
  </a>

</div>

      </motion.div>

    </section>
  );
};

export default Hero;