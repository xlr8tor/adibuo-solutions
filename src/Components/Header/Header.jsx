import { useState, useEffect } from "react";
import { Wrapper } from "./Header.styles";
import Logo from "../../Assets/Images/Logo.svg";
import Hamburger from "../../Assets/Images/Hamburger.svg";
import Close from "../../Assets/Images/Close.svg";
import { useWindowWidth } from "../../Hooks/useWindowWidth";
import { NavLink } from "react-router-dom";

const Header = () => {
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
      className={
        scrollPosition >= 80 ? "header grid scroll-header" : "header grid"
      }
    >
      <div className="header__section">
        <NavLink to="/">
          <img src={Logo} alt="logo" className="logo" />
        </NavLink>
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
                <NavLink to="/about" className="nav__NavLink">
                  About Us
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/services" className="nav__NavLink">
                  Services
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/careers" className="nav__NavLink">
                  Careers
                </NavLink>
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
