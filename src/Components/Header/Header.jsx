import { useState, useEffect } from "react";
import { Wrapper } from "./Header.styles";
import Logo from "../../Assets/Images/Logo.svg";
import Hamburger from "../../Assets/Images/Hamburger.svg";
import Close from "../../Assets/Images/Close.svg";
import { useWindowWidth } from "../../Hooks/useWindowWidth";
import { Link } from "react-router-dom";

const Header = ({ home }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const isVisible = useWindowWidth() >= 768 ? true : false;

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper
      isHome={home}
      className={
        scrollPosition >= 80 ? "header grid scroll-header" : "header grid"
      }
    >
      <div className="header__section">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
        <div
          className={
            sidebarVisible && !isVisible
              ? "nav__wrapper nav__wrapper-open"
              : "nav__wrapper nav__wrapper-close"
          }
        >
          <nav
            className={sidebarVisible && !isVisible ? "nav nav__open" : "nav"}
          >
            <div
              className="close__btn"
              onClick={() => {
                setSidebarVisible(false);
              }}
            >
              <img src={Close} alt="times" />
            </div>
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/about" className="nav__link">
                  About Us
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/services" className="nav__link">
                  Services
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/careers" className="nav__link">
                  Careers
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {!isVisible && (
        <img
          src={Hamburger}
          alt="hamburger"
          className="hamburger"
          onClick={() => {
            setSidebarVisible(true);
          }}
        />
      )}
    </Wrapper>
  );
};

export default Header;
