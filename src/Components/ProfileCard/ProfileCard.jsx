import { Wrapper } from "./ProfileCard.styles";

const ProfileCard = ({ name, text, src }) => {
  return (
    <Wrapper className="profile grid container">
      <div className="profile__content">
        <h3 className="profile__name">{name}</h3>
        <p className="profile__data">{text}</p>
      </div>
      <div className="profile__img-wrap">
        <img
          src={`./desktop-${src}`}
          alt="Corporate Headshot"
          className="profile__img"
        />
      </div>
    </Wrapper>
  );
};

export default ProfileCard;
