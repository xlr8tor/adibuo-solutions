import { Wrapper } from "./ProfileCard.styles";
import { FaLinkedinIn } from "react-icons/fa";

const ProfileCard = ({ name, text, src, link }) => {
  return (
    <Wrapper className="profile grid container">
      <div className="profile__content">
        <div className="profile__name-wrapper">
          <h3 className="profile__name">{name}</h3>
          <a
            href={link}
            className="socials-link"
            target="_blank"
            rel="noreferrer"
          >
            <span className="accent">
              <FaLinkedinIn className="socials-icon" />
            </span>
          </a>
        </div>
        {text}
      </div>
      <div className="profile__img-wrap">
        <img src={src} alt="Corporate Headshot" className="profile__img" />
      </div>
    </Wrapper>
  );
};

export default ProfileCard;
