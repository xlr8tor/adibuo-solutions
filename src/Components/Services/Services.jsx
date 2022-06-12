import React from "react";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Wrapper } from "./Services.styles";
import MobileIMG from "../../Assets/Images/mobile-services-img.jpg";
import DesktopIMG from "../../Assets/Images/desktop-services-img.png";
import { useWindowWidth } from "../../Hooks/useWindowWidth";
import ServicesGrid from "../ServicesGrid/ServicesGrid";
const Services = () => {
  const isDesktop = useWindowWidth() >= 768 ? true : false;

  return (
    <div>
      <Header />
      <Wrapper>
        <section className="container grid section">
          <div className="section__img-wrap">
            <img
              src={isDesktop ? DesktopIMG : MobileIMG}
              alt="Man answering phone call"
              className="section__img"
            />
          </div>
          <div>
            <h2 className="section__subtitile">
              Make a good impression at every interaction.
            </h2>
            <p>
              <span className="text-block">
                First impression matters or stay longer does not apply to your
                business customers. At every interaction, we make sure your
                business keeps its reputation. One bad service can make you lose
                customers we are here to make sure that does not happen.
              </span>
              <span className="text-block">
                Customers' price sensitivity is likely to drop when provided
                with great experience and that is exactly what we do. We make
                your customers feel like they are getting so much value for
                money. Satisfied customers are usually willing to spend more and
                become loyal advocates for your business.
              </span>
            </p>
          </div>
        </section>
      </Wrapper>
      <ServicesGrid />
      <Footer />
    </div>
  );
};

export default Services;
