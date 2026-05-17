import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Palette,
  Server,
  Database,
  MonitorCog,
  Workflow,
  Layers3,
  Network,
} from "lucide-react";

const skills = [
  { icon: Code2, title: "React.js", category: "Frontend" },
  { icon: Palette, title: "Tailwind CSS", category: "UI Styling" },
  { icon: Server, title: "Laravel", category: "Backend" },
  { icon: Database, title: "MySQL", category: "Database" },
  { icon: Database, title: "SQL Server", category: "Database" },
  { icon: MonitorCog, title: "C# Desktop Apps", category: "Desktop" },
  { icon: Layers3, title: "Database Design", category: "Architecture" },
  { icon: Workflow, title: "System Analysis", category: "Planning" },
  { icon: Network, title: "Information Systems", category: "Business Tech" },
  { icon: Server, title: "API Development", category: "Integration" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const Skills = () => {
  const reduceMotion = useReducedMotion();

  const motionView = reduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.16 },
      };

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-neutral-950 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.1),transparent_36%)]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          {...motionView}
          variants={stagger}
          className="mb-10 max-w-3xl sm:mb-12"
        >
          <motion.div
            variants={fadeUp}
            className="mb-5 inline-flex rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-cyan-200 sm:text-sm"
          >
            Skills & Expertise
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-2xl font-black leading-tight sm:text-4xl md:text-5xl"
          >
            Technologies and skills I use to build reliable digital solutions.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-sm leading-7 text-gray-300 sm:text-lg sm:leading-8"
          >
            A practical mix of frontend, backend, database, desktop application,
            and information systems skills for building complete software
            solutions.
          </motion.p>
        </motion.div>

        <motion.div
          {...motionView}
          variants={stagger}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-5"
        >
          {skills.map(({ icon: Icon, title, category }) => (
            <motion.article
              key={title}
              variants={fadeUp}
              whileHover={reduceMotion ? undefined : { y: -6 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="group flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-4 backdrop-blur transition hover:border-cyan-300/50 hover:bg-cyan-300/[0.06] sm:block sm:p-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-300 transition group-hover:bg-cyan-300 group-hover:text-neutral-950 sm:mb-5 sm:h-12 sm:w-12">
                <Icon size={22} />
              </div>

              <div>
                <h3 className="text-base font-bold text-white sm:text-lg">
                  {title}
                </h3>
                <p className="mt-1 text-sm text-gray-400 sm:mt-2">
                  {category}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;