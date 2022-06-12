import React from "react";
import AboutText from "../AboutText/AboutText";
import Footer from "../Footer/Footer";
import Founders from "../Founders/Founders";
import Header from "../Header/Header";
import Mission from "../Mission/Mission";
import Values from "../Values/Values";

const About = () => {
  return (
    <>
      <Header home={false} />
      <Mission />
      <AboutText />
      <Founders />
      <Values />
      <Footer />
    </>
  );
};

export default About;
