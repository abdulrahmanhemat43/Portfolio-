import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ArrowUpRight, MonitorCog, School, Users } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import hrmis1 from "../assets/projects/hrmis1.jpg";
import hrmis2 from "../assets/projects/hrmis2.PNG";
import school1 from "../assets/projects/school1.jpg";
import stationary1 from "../assets/projects/stationary1.PNG";

const projects = [
  {
    icon: Users,
    title: "HRMIS System",
    description:
      "Human Resource Information Management System for Nangarhar University, designed to manage staff records, HR workflows, and institutional reporting.",
    images: [hrmis1, hrmis2],
    tags: ["HR Management", "Database", "Reports"],
  },
  {
    icon: School,
    title: "School Management System",
    description:
      "Web-based management system for students, teachers, exams, classes, attendance, and academic reports.",
    images: [school1],
    tags: ["Web App", "Education", "Management"],
  },
  {
    icon: MonitorCog,
    title: "Stationery Desktop App",
    description:
      "Desktop application for inventory, sales, stock tracking, and daily business management using C#.",
    images: [stationary1],
    tags: ["C#", "Desktop App", "Inventory"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-neutral-950 px-5 py-28 text-white sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.11),transparent_38%)]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-bold uppercase text-cyan-200">
            Projects
          </div>

          <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            Selected systems and applications I have built.
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg">
            A collection of practical software solutions focused on management,
            automation, reporting, and real-world business needs.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map(
            ({ icon: Icon, title, description, images, tags }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/[0.06]"
              >
                <div className="relative">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                      delay: 3200,
                      disableOnInteraction: false,
                    }}
                    loop={images.length > 1}
                    className="project-swiper h-56 sm:h-64 lg:h-56"
                  >
                    {images.map((img, imageIndex) => (
                      <SwiperSlide key={imageIndex}>
                        <img
                          src={img}
                          alt={`${title} preview ${imageIndex + 1}`}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <div className="absolute left-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-neutral-950/80 text-cyan-300 backdrop-blur">
                    <Icon size={22} />
                  </div>
                </div>

                <div className="p-5">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <ArrowUpRight
                      size={20}
                      className="mt-1 text-gray-500 transition group-hover:text-cyan-300"
                    />
                  </div>

                  <p className="text-sm leading-7 text-gray-400">
                    {description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            )
          )}
        </div>
      </div>

      <style>{`
        .project-swiper .swiper-button-next,
        .project-swiper .swiper-button-prev {
          color: rgb(103 232 249);
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: rgba(10, 10, 10, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(10px);
        }

        .project-swiper .swiper-button-next::after,
        .project-swiper .swiper-button-prev::after {
          font-size: 13px;
          font-weight: 800;
        }

        .project-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.65);
          opacity: 1;
        }

        .project-swiper .swiper-pagination-bullet-active {
          background: rgb(103 232 249);
        }
      `}</style>
    </section>
  );
};

export default Projects;