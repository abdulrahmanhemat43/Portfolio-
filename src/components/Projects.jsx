import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import hrmis1 from "../assets/projects/hrmis1.jpg";
import hrmis2 from "../assets/projects/hrmis2.PNG";
import school1 from "../assets/projects/school1.jpg";
import stationary1 from "../assets/projects/stationary1.PNg";

const Projects = () => {

  const projects = [
    {
      title: "HRMIS System",
      description:
        "Human Resource Information Management System for Nangarhar University.",
      images: [hrmis1, hrmis2],
    },

    {
      title: "School Management System",
      description:
        "Web-based management system for students, teachers, exams and reports.",
      images: [school1],
    },

    {
      title: "Stationery Desktop App",
      description:
        "Desktop application for inventory and sales management using C#.",
      images: [stationary1],
    },
  ];

  return (
    <section id="projects" className="py-28 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-14">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-white/5 border border-gray-800 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-cyan-400 transition"
            >

              {/* Slider */}
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="h-52"
              >

                {project.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt={project.title}
                      className="w-full h-52 object-cover"
                    />
                  </SwiperSlide>
                ))}

              </Swiper>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {project.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;