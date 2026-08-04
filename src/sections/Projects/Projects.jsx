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

const Projects = () => {
  return (
    <section className="Projects">
      <Slide fraction={0.5} duration={1000} direction="up" triggerOnce>
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
              slidesPerView={2}
              spaceBetween={50}
              pagination={true}
              modules={[Pagination]}
              className="mySwiper Projects__content_cards"
            >
              <SwiperSlide>
                <ProjectCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProjectCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProjectCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Slide>
    </section>
  );
};
export default Projects;
