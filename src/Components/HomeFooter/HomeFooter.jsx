import styled from "styled-components";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const HomeFooter = ({ isFooter }) => {
  return (
    <Wrapper className="footer" isFooter={isFooter}>
      <ul className="footer__list">
        <li className="footer__item">
          <a href="https://www.facebook.com" className="footer__link">
            <FaFacebook className="socials-icon" />
          </a>
        </li>
        <li className="footer__item">
          <a href="https://www.twitter.com" className="footer__link">
            <AiFillTwitterCircle className="socials-icon" />
          </a>
        </li>
        <li className="footer__item">
          <a href="https://https:www.instagram.com" className="footer__link">
            <FaInstagram className="socials-icon" />
          </a>
        </li>
        <li className="footer__item">
          <a href="mailto:hell@adibuosolutions.com" className="footer__link">
            hello@adibuosolutions.com
          </a>
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  &.footer {
    position: ${(props) => (props.isFooter ? "relative" : "absolute")};
    width: 100%;
    bottom: 0;
    background-color: var(--bg-color-secondary-dark);
    color: var(--text-color);
    padding: 1.5rem;
  }

  .footer__list {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer__item:not(:first-child) {
    margin-left: var(--mb-1);
  }

  @media (min-width: 768px) {
    .footer__list {
      justify-content: flex-start;
    }
  }

  @media (min-width: 1440px) {
    &.footer {
      padding: 1.5rem 7.5rem;
    }
  }
`;
export default HomeFooter;
