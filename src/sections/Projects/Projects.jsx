import "./Projects.scss";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Slide } from "react-awesome-reveal";
import { isMobile } from "../../utils";
import { projectsList } from "./projectsList";

const Projects = () => {
  return (
    <section id="Projects" className="Projects">
      <Slide
        fraction={isMobile() ? 0.1 : 0.5}
        duration={1000}
        direction={isMobile() ? `left` : "up"}
        triggerOnce
      >
        <div className="container">
          <div className="Projects__content">
            <h4 className="Projects__content_subtitle section-subtitle text-medium font-normal">
              Projects
            </h4>
            <h2 className="Projects__content_title heading-1 font-normal">
              <p>Projects</p>
            </h2>

            <Swiper
              grabCursor={true}
              slidesPerView={isMobile ? 1 : 1.5}
              spaceBetween={50}
              pagination={true}
              modules={[Pagination]}
              className="mySwiper Projects__content_cards"
            >
              {projectsList?.map((project, idx) => (
                <SwiperSlide key={project?.link}>
                  <ProjectCard key={project?.link} data={project} idx={idx} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Slide>
    </section>
  );
};
export default Projects;
