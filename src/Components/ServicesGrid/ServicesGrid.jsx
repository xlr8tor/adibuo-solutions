import { useRef, useLayoutEffect, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "../Arrows/Arrows";
import usePreventBodyScroll from "../../Hooks/usePreventBodyScroll";
import styled from "styled-components";
import ServiceCard from "../ServicesCard/ServicesCard";
import { Services } from "../../Util/Services";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowWidth } from "../../Hooks/useWindowWidth";
import ContactUs from "../ContactUs/ContactUs";

gsap.registerPlugin(ScrollTrigger);

const ServicesGrid = () => {
  const [items] = useState(Services);
  const { disableScroll, enableScroll } = usePreventBodyScroll();
  let isDesktop = useWindowWidth() >= 768 ? true : false;

  const panels = useRef([]);
  const panelsContainer = useRef();
  const timeline = useRef();

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  // useLayoutEffect(() => {
  //   const totalPanels = panels.current.length;

  //   timeline.current = gsap.timeline({
  //     scrollTrigger: {
  //       id: "trigger",
  //       pin: panelsContainer.current,
  //       scrub: 1,
  //       trigger: panelsContainer.current,
  //       end: () => "+=" + panelsContainer.current.offsetWidth,
  //     },
  //     defaults: { ease: "none", duration: 1 },
  //   });

  //   timeline.current.to(
  //     panels.current,
  //     {
  //       xPercent: -100 * (totalPanels - 1),
  //     },
  //     0
  //   );
  // }, []);

  return (
    <Wrapper id="horizontal-scroll" className="section">
      <div
        className="scroll__wrapper container"
        // onMouseLeave={enableScroll}
        // onMouseEnter={disableScroll}
      >
        {isDesktop ? (
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            className="services__list  grid"
          >
            {Services.map((item) => (
              <ServiceCard
                title={item.title}
                text={item.text}
                itemId={item.id}
                key={item.id}
              />
            ))}
          </ScrollMenu>
        ) : (
          <ul className="services__list grid">
            {Services.map((item, index) => {
              return (
                <li
                  className="services__item"
                  key={index}
                  ref={(e) => createPanelsRefs(e, index)}
                >
                  <ServiceCard title={item.title} text={item.text} />
                </li>
              );
            })}
          </ul>
        )}

        <ul className="services__list  grid">
          {/* <li ref={(e) => createPanelsRefs(e, 0)} className="list__accent">
            <div className="section__header">
              <h2 className="section__subtitle">
                Why do you need <span className="accent">Adibuo?</span>
              </h2>
              <div className="section__description">
                <p>
                  Adibuo provides uninterrupted scalable customer support from
                  Africa in any required time zone. We provide a dedicated
                  remote team of native English-speaking to represent your
                  business.
                </p>
              </div>
            </div>
          </li> */}

          {/* {Services.map((item, index) => {
            return (
              <li
                className="services__item"
                key={index}
                ref={(e) => createPanelsRefs(e, index)}
              >
                <ServiceCard title={item.title} text={item.text} />
              </li>
            );
          })} */}
        </ul>
      </div>
      <ContactUs />
    </Wrapper>
  );
};

export default ServicesGrid;

const Wrapper = styled.section`
  &.section {
    overflow-x: hidden;
    overscroll-behavior: none;
    perspective: 1000;
  }

  .scroll__wrapper {
    margin-bottom: 5rem;
  }

  .services__list {
    /* grid-auto-flow: column; */
    grid-auto-flow: row;
  }

  .services__item:first-child {
    align-self: center;
  }

  .services__item:first-child div {
    border: none;
    padding: 0;
  }

  .services__item:first-child h3 {
    font-size: var(--large-font-size);
    font-weight: var(--font-medium);
    line-height: 48px;
  }

  .services__item:first-child p {
    background-color: var(--bg-color-secondary-light);
    color: var(--text-color);
    padding: 1.875rem 1.5rem;
  }

  .section__header {
    margin-bottom: var(--mb-0-5);
  }

  .section__description {
    background-color: var(--bg-color-secondary-light);
    color: var(--text-color);
  }

  .list__accent {
    align-self: center;
  }

  .section__header {
    width: 312px;
  }

  .accent {
    color: var(--bg-color-secondary-light);
  }

  .react-horizontal-scrolling-menu--item:first-child {
    align-self: center;
  }

  .react-horizontal-scrolling-menu--item:first-child div {
    border: none;
    padding: 0;
  }

  .react-horizontal-scrolling-menu--item:first-child h3 {
    font-size: var(--large-font-size);
    font-weight: var(--font-medium);
    line-height: 48px;
  }

  .react-horizontal-scrolling-menu--item:first-child p {
    background-color: var(--bg-color-secondary-light);
    color: var(--text-color);
    padding: 1.875rem 1.5rem;
  }

  .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
    display: none;
  }

  .react-horizontal-scrolling-menu--scroll-container {
    gap: 1.5rem;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  @media (min-width: 768px) {
    .scroll__wrapper {
      margin-top: 5rem;
      margin-bottom: 5rem;
    }

    .section__header {
      width: 412px;
    }
  }

  @media (min-width: 1440px) {
    .scroll__wrapper {
      margin-top: 5rem;
      margin-bottom: 5rem;
    }

    .section__header {
      width: 412px;
    }
  }
`;
