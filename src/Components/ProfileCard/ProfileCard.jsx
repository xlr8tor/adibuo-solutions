import { Wrapper } from "./ProfileCard.styles";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProfileCard = ({ name, text, src }) => {
  return (
    <Wrapper className="profile grid container">
      <div className="profile__content">
        <div className="profile__name-wrapper">
          <h3 className="profile__name">{name}</h3>
          <Link to="/" className="socials-link">
            <span className="accent">
              <FaLinkedinIn className="socials-icon" />
            </span>
          </Link>
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
