import { Helmet } from "react-helmet-async";
import AboutText from "../AboutText/AboutText";
import Footer from "../Footer/Footer";
import Founders from "../Founders/Founders";
import Header from "../Header/Header";
import Mission from "../Mission/Mission";
import Values from "../Values/Values";

const About = () => {
  return (
    <>
      <Header />
      <Helmet>
        <title>Meet the Adibuo Team</title>
        <meta
          name="description"
          content="We are on a mission to communize access to Africa’s most talented professionals, best tools and techniques to aid business growth across the globe"
        />
        <meta
          name="keywords"
          content="Remote working, customer service, developers, IT support"
        />
      </Helmet>
      <Mission />
      <AboutText />
      <Founders />
      <Values />
      <Footer />
    </>
  );
};

export default About;
