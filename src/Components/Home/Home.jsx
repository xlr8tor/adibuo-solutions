import { Helmet } from "react-helmet-async";
import { Wrapper } from "./Home.styles";
import { useWindowWidth } from "../../Hooks/useWindowWidth";
import MobileImage from "../../Assets/Images/mobile-home-img.png";
import DesktopImage from "../../Assets/Images/desktop-home-img.png";
import HomeFooter from "../HomeFooter/HomeFooter";
import Header from "../Header/Header";

const Home = () => {
  const isDesktop = useWindowWidth() >= 768 ? true : false;
  return (
    <>
      <Header />
      <Wrapper className="section">
        <Helmet>
          <title>Adibuo Solutions</title>
          <meta
            name="description"
            content="Adibuo Solutions is a trusted advisor that is just right for your start-up or scale-up business or institutions. We are a group of professionals that provides best-in-class customer and IT solutions."
          />
          <meta
            name="keywords"
            content="Adibuo, consulting, solutions, customer service, customer experience, IT service, IT solutions"
          />
        </Helmet>
        <div className="section__wrapper grid">
          <div className="section__content">
            <div className=" container ">
              <h1 className="section__title">
                Propel business growth with
                <span className="accent">
                  {" "}
                  positive customer service experiences
                </span>
              </h1>
              <p className="section__description">
                We help businesses build, train and manage their customer
                service and IT support while they focus on other important
                aspects of the business. We are a team of independent
                professionals that makes sure your customers are happy to stay
                in business with you.
              </p>
              <ul className=" nav__list">
                <li className="nav__item">Training & Onboarding</li>
                <li className="nav__item">Hands-on IT Support</li>
                <li className="nav__item">See More</li>
              </ul>
            </div>

            {isDesktop && <HomeFooter />}
          </div>

          <div className="home__img-wrapper">
            <img
              src={isDesktop ? DesktopImage : MobileImage}
              alt=""
              className="home__img"
            />
          </div>
          {!isDesktop && <HomeFooter isFooter={true} />}
        </div>
      </Wrapper>
    </>
  );
};

export default Home;
