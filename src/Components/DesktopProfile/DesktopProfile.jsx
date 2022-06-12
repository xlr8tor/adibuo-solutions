import { Wrapper } from "./DesktopProfile.styles";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
import ProfileCard from "../ProfileCard/ProfileCard";

import { Profile } from "../../Util/Profile";

const DesktopProfile = () => {
  return (
    <Wrapper className="portfolio section" id="portfolio">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Navigation, Pagination]}
        className="portfolio__container container"
      >
        {Profile.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <ProfileCard text={item.text} name={item.name} src={item.src} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

export default DesktopProfile;
