import { Wrapper } from "./Mission.styles";
import { useWindowWidth } from "../../Hooks/useWindowWidth";
import MobileIMG from "../../Assets/Images/mobile-team-img.png";
import DesktopIMG from "../../Assets/Images/desktop-team-img.png";

const Mission = () => {
  const isDesktop = useWindowWidth() >= 768 ? true : false;

  return (
    <Wrapper className="section">
      <div className="container grid section__content">
        <h1 className="section__tagline">
          We are on a mission to communize access to Africa’s most talented
          professionals, best tools and techniques to aid business growth across
          the globe
        </h1>
        <div className="section__img-wrap">
          <img
            src={isDesktop ? DesktopIMG : MobileIMG}
            alt="Team members discussing ideas"
            className="section__img"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Mission;
