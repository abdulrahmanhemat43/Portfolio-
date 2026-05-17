import { motion } from "framer-motion";
import {
  Code2,
  MonitorSmartphone,
  Server,
  MonitorCog,
  Database,
  Workflow,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Full Stack Web Development",
    desc: "Modern and scalable web applications using React.js, Laravel, APIs, and MySQL.",
    icon: Code2,
  },
  {
    title: "Frontend Development",
    desc: "Responsive, fast, and interactive user interfaces using React.js, Tailwind CSS, and Bootstrap.",
    icon: MonitorSmartphone,
  },
  {
    title: "Backend Development",
    desc: "Secure backend systems, REST APIs, authentication, and database integration using Laravel.",
    icon: Server,
  },
  {
    title: "Desktop Application Development",
    desc: "Professional desktop software solutions using C# and SQL Server for business systems.",
    icon: MonitorCog,
  },
  {
    title: "Database Design & Management",
    desc: "Efficient database architecture, SQL optimization, normalization, and enterprise data management.",
    icon: Database,
  },
  {
    title: "Information Systems Solutions",
    desc: "Analysis, design, and development of enterprise Information Systems for organizations and institutions.",
    icon: Workflow,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-neutral-950 px-5 py-28 text-white sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.1),transparent_38%)]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-bold uppercase text-cyan-200">
            Services
          </div>

          <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            Software services for modern business systems.
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg">
            I provide practical software solutions including web applications,
            desktop systems, database design, APIs, and enterprise information
            systems.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, desc, icon: Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
                ease: "easeOut",
              }}
              whileHover={{ y: -6 }}
              className="group rounded-lg border border-white/10 bg-white/[0.04] p-6 transition hover:border-cyan-300/50 hover:bg-cyan-300/[0.06]"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-300 transition group-hover:bg-cyan-300 group-hover:text-neutral-950">
                  <Icon size={24} />
                </div>

                <ArrowUpRight
                  size={20}
                  className="text-gray-600 transition group-hover:text-cyan-300"
                />
              </div>

              <h3 className="text-xl font-bold text-white">{title}</h3>

              <p className="mt-3 text-sm leading-7 text-gray-400">{desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;