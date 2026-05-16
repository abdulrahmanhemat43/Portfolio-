import {
  FaCode,
  FaReact,
  FaServer,
  FaDesktop,
  FaDatabase,
  FaProjectDiagram,
} from "react-icons/fa";

import { motion } from "framer-motion";

const Services = () => {

  const services = [
    {
      title: "Full Stack Web Development",
      desc: "Modern and scalable full stack web applications using React.js, Laravel, APIs, and MySQL.",
      icon: <FaCode />,
    },

    {
      title: "Frontend Development",
      desc: "Responsive and interactive user interfaces using React.js, Tailwind CSS, and Bootstrap.",
      icon: <FaReact />,
    },

    {
      title: "Backend Development",
      desc: "Secure backend systems, REST APIs, authentication, and database integration using Laravel.",
      icon: <FaServer />,
    },

    {
      title: "Desktop Application Development",
      desc: "Professional desktop software solutions using C# and SQL Server for business systems.",
      icon: <FaDesktop />,
    },

    {
      title: "Database Design & Management",
      desc: "Efficient database architecture, SQL optimization, normalization, and enterprise data management.",
      icon: <FaDatabase />,
    },

    {
      title: "Information Systems Solutions",
      desc: "Analysis, design, and development of enterprise Information Systems for organizations and institutions.",
      icon: <FaProjectDiagram />,
    },
  ];

  return (
    <section id="services" className="py-28 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-cyan-400 mb-4">
            Services
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            I provide modern software solutions including web applications,
            desktop systems, database management, and enterprise Information Systems.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, i) => (

            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 border border-gray-800 backdrop-blur-xl p-8 rounded-3xl hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition"
            >

              {/* Icon */}
              <div className="text-4xl text-cyan-400 mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-7">
                {service.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Services;