import React from "react";
import { Wrapper } from "./MobileProfile.styles";
import { Profile } from "../../Util/Profile";

const MobileProfile = () => {
  return (
    <Wrapper className="section profile">
      {Profile.map((item, index) => {
        return (
          <div key={index} className="profile__wrapper">
            <div className="container profile__data">
              <div className="profile__img-wrapper">
                <img src={item.src} alt="" className="profile__img" />
              </div>
              <h3 className="profile__name">{item.name}</h3>
              <p className="profile__info">{item.text}</p>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default MobileProfile;
