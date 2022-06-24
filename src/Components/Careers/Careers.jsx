import { useEffect, useRef } from "react";
import { CarouselProvider, Dot, Slide, Slider } from "pure-react-carousel";
import { Helmet } from "react-helmet-async";
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
  const tabs = useRef([]);
  const menuRef = useRef();
  const test = useRef();

  const createTabsRefs = (tab, index) => {
    tabs.current[index] = tab;
    console.log(tabs);
  };

  console.log(test);

  useEffect(() => {}, []);
  return (
    <Wrapper>
      <Helmet>
        <title>We care if you are passionate and have a growth mindset!</title>
        <meta
          name="description"
          content="We operate on a 100% remote working system and once a year our teams meet at a fully sponsored gathering to collaborate and meet with teammates all over the world. Due to our model of working, we require disciplined people that can work effectively while being thousands of miles apart from their teammates. If you require a lot of hand-holding and micromanaging Adibuo is not for you. If you are looking to grow, horn your skills, and be 10x efficient at what you do please see below available opportunities. we can not wait to meet with you!"
        />
        <meta
          name="keywords"
          content="Remote working, customer service, developers, IT support"
        />
      </Helmet>
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
          lockOnWindowScroll={true}
        >
          <div className="carousel__list--wrapper grid">
            <h3 className="carousel__list--title">Positions Available</h3>
            {useWindowWidth() >= 768 ? null : (
              <span className="carousel-accent">Scroll for more &gt;</span>
            )}

            <div className="carousel__list grid" ref={test}>
              {Titles.map((item, index) => {
                const handleClick = () => {
                  console.log("here");
                };

                return (
                  <Dot
                    slide={index}
                    key={index}
                    className="carousel__item"
                    // ref={(e) => createTabsRefs(e, index)}
                    onClick={handleClick}
                  >
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
