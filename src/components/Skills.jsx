import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "React.js",
    "Tailwind CSS",
    "Laravel",
    "MySQL",
    "SQL Server",
    "C# Desktop Apps",
    "Database Design",
    "System Analysis",
    "Information Systems",
    "API Development"
  ];

  return (
    <section id="skills" className="py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-cyan-400 mb-10">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-4 gap-5">

          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="p-4 bg-white/5 border border-gray-800 rounded-xl text-center backdrop-blur-md hover:border-cyan-400"
            >
              {skill}
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;