import { motion, useReducedMotion } from "framer-motion";
import {
  GraduationCap,
  Database,
  Code2,
  MonitorCog,
  CheckCircle2,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Information Systems",
    text: "Strong academic foundation in systems, business processes, and software solutions.",
  },
  {
    icon: Database,
    title: "Database Design",
    text: "Experienced with MySQL, SQL Server, relational modeling, and structured data workflows.",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    text: "Building modern web applications with React.js, Laravel, APIs, and clean UI patterns.",
  },
  {
    icon: MonitorCog,
    title: "Desktop Solutions",
    text: "Creating practical desktop software using C# and database-backed application logic.",
  },
];

const strengths = [
  "Business requirement analysis",
  "Database-driven applications",
  "Clean and responsive interfaces",
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const About = () => {
  const reduceMotion = useReducedMotion();

  const motionView = reduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.18 },
      };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-neutral-950 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_34%),linear-gradient(to_bottom,rgba(16,185,129,0.06),transparent_45%)]" />

      <motion.div
        {...motionView}
        variants={stagger}
        className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14"
      >
        <motion.div variants={fadeUp}>
          <div className="mb-5 inline-flex rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-cyan-200 sm:text-sm">
            About Me
          </div>

          <h2 className="max-w-2xl text-2xl font-black leading-tight sm:text-4xl md:text-5xl">
            I design and build systems that solve real business problems.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:mt-6 sm:text-lg sm:leading-8">
            I am a Computer Science graduate from Nangarhar University with a
            strong specialization in Information Systems. My work combines
            software development, database design, system analysis, and
            user-centered thinking to create efficient and scalable digital
            solutions.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:max-w-md">
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <p className="text-2xl font-black text-cyan-300 sm:text-3xl">
                IS
              </p>
              <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                Specialization
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <p className="text-2xl font-black text-emerald-300 sm:text-3xl">
                Full
              </p>
              <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                Stack Developer
              </p>
            </div>
          </div>

          <div className="mt-7 space-y-3">
            {strengths.map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle2 size={18} className="shrink-0 text-emerald-300" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <p className="text-sm leading-7 text-gray-300 sm:text-lg sm:leading-8">
            My expertise includes analyzing business requirements, designing
            database systems, developing full stack web applications, and
            building desktop software solutions for real-world problems. I am
            passionate about creating professional, user-friendly systems using
            modern technologies like React.js, Laravel, MySQL, C#, and SQL
            Server.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, text }) => (
              <motion.article
                key={title}
                variants={fadeUp}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                className="group rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300/50 hover:bg-cyan-300/[0.06]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-300 transition group-hover:bg-cyan-300 group-hover:text-neutral-950">
                  <Icon size={22} />
                </div>

                <h3 className="text-base font-bold text-white sm:text-lg">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">{text}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;