import DesktopProfile from "../DesktopProfile/DesktopProfile";
import MobileProfile from "../MobileProfile/MobileProfile";
import { Wrapper } from "./Founders.styles";
import { useWindowWidth } from "../../Hooks/useWindowWidth";

const Founders = () => {
  return (
    <Wrapper className="section">
      <div className="section__wrapper">
        {useWindowWidth() >= 768 ? <DesktopProfile /> : <MobileProfile />}
        <p className="section__data"></p>
      </div>
    </Wrapper>
  );
};

export default Founders;
