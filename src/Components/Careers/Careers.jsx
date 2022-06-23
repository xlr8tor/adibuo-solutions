import { CarouselProvider, Dot, Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Footer from "../Footer/Footer";
import JobCard from "../JobCard/JobCard";
import { Wrapper } from "./Careers.styles";
import { Positions, Titles } from "../../Util/Positions";
import Header from "../Header/Header";
import Apply from "../../Assets/Images/Apply.svg";
import Connect from "../../Assets/Images/Connect.svg";
import Match from "../../Assets/Images/Match.svg";
import { useWindowWidth } from "../../Hooks/useWindowWidth";

const Careers = () => {
  return (
    <Wrapper>
      <Header />
      <section className="hiring container">
        <h1 className="hiring__title">Our Hiring Process</h1>
        <ul className="hiring__list grid">
          <li className="hiring__item">
            <span className="icon__wrapper">
              <img src={Apply} alt="Notepad" />
            </span>
            <span className="text__content">Apply</span>
          </li>
          <li className="hiring__item">
            <span className="icon__wrapper">
              <img src={Connect} alt="" />
            </span>
            <span className="text__content">Connect</span>
          </li>
          <li className="hiring__item">
            <span className="icon__wrapper">
              <img src={Match} alt="jigsaw pieces" />
            </span>
            <span className="text__content">Match</span>
          </li>
        </ul>
      </section>
      <div className="container carousel">
        <CarouselProvider
          naturalSlideWidth={100}
          isIntrinsicHeight
          totalSlides={4}
        >
          <div className="carousel__list--wrapper grid">
            <h3 className="carousel__list--title">Positions Available</h3>
            {useWindowWidth() >= 768 ? null : (
              <span className="carousel-accent">Scroll for more &gt;</span>
            )}

            <div className="carousel__list grid">
              {Titles.map((item, index) => {
                return (
                  <Dot slide={index} key={index}>
                    <span className="sr-only">{item}</span>
                  </Dot>
                );
              })}
            </div>
          </div>

          <Slider>
            {Positions.map((item, index) => {
              return (
                <Slide className="career__item" key={index} index={index}>
                  <JobCard
                    position={item.positiion}
                    description={item.description}
                    responsibility={item.responsibility}
                  />
                </Slide>
              );
            })}
          </Slider>
        </CarouselProvider>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Careers;
