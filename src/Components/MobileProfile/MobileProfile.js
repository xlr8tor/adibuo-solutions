import React from "react";
import { Wrapper } from "./MobileProfile.styles";
import { Profile } from "../../Util/Profile";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const MobileProfile = () => {
  return (
    <Wrapper className="section profile">
      {Profile.map((item, index) => {
        return (
          <div key={index} className="profile__wrapper">
            <div className="container profile__info">
              <div className="profile__img-wrapper">
                <img
                  src={`/${item.src}-mobile.png`}
                  alt="Corperate Headshot"
                  className="profile__img"
                />
              </div>
              <div className="profile__name-wrapper">
                <h3 className="profile__name">{item.name}</h3>
                <Link to="/" className="socials-link">
                  <span className="accent">
                    <FaLinkedinIn className="socials-icon" />
                  </span>
                </Link>
              </div>

              {item.text}
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default MobileProfile;
