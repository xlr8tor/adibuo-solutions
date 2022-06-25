import { Wrapper } from "./Footer.styles";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper className="footer">
      <section className="grid footer__wrapper">
        <div className="footer__header">
          <h3 className="subsection-title">
            Want to propel your business forward? Contact us
          </h3>
          <p className="subsection-description">
            We provide top talents and gets the job done excellently
          </p>
        </div>
        <ul className="footer__list">
          <li className="footer__item">
            <Link to="/" className="footer__link">
              Home
            </Link>
          </li>
          <li className="footer__item">
            <Link to="/services" className="footer__link">
              Services
            </Link>
          </li>
          <li className="footer__item">
            <Link to="/about" className="footer__link">
              About us
            </Link>
          </li>
          <li className="footer__item">
            <Link to="/careers" className="footer__link">
              Careers
            </Link>
          </li>
        </ul>
        <div className="footer__contact">
          <ul className="footer__list">
            <li className="footer__item">
              <p className="footer__contact-title">GET IN TOUCH</p>
            </li>
            <li className="footer__item footer__contact-email">
              <a href="mailto:hell@adibuosolutions.com">
                hello@adibuosolutions.com
              </a>
            </li>
            <li className="footer__item">
              <p className="footer__contact-phone">+2348033482405</p>
            </li>
          </ul>

          <ul className="footer__links grid">
            <li className="footer__items">
              <a
                href="https://www.facebook.com/Adibuo.Solutions"
                className="footer__link"
              >
                <FaFacebook className="socials-icon" />
              </a>
            </li>
            <li className="footer__items">
              <a
                href="https://twitter.com/AdibuoSolutions"
                className="footer__link"
              >
                <AiFillTwitterCircle className="socials-icon" />
              </a>
            </li>
            <li className="footer__items">
              <a
                href="https://www.instagram.com/adibuosolutions/"
                className="footer__link"
              >
                <FaInstagram className="socials-icon" />
              </a>
            </li>
          </ul>
        </div>
        <p className="copywrite">(Adibuo) © 2022 Adibuo</p>
      </section>
    </Wrapper>
  );
};

export default Footer;
