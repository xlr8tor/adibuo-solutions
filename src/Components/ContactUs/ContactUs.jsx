import styled from "styled-components";
import { useWindowWidth } from "../../Hooks/useWindowWidth";

const ContactUs = () => {
  return (
    <Wrapper
      className={useWindowWidth() >= 768 ? "container section" : "section"}
    >
      <h2 className="section__subtitile mb-2">
        Want to propel your business forward?
        <a href="mailto:hell@adibuosolutions.com">
          <span className="accent"> Contact us</span>
        </a>
      </h2>
      <p className="subsection__intro">Our process:-</p>
      <ul className="section__list">
        <li className="list__item">
          <span className="number">1</span>
          <p> Have a chat to understand your business needs</p>
        </li>
        <li className="list__item">
          <span className="number">2</span>
          <p>Develop a tailored proposal to help achieve your objective</p>
        </li>
        <li className="list__item">
          <span className="number">3</span>
          <p>The signing of contract</p>
        </li>
        <li className="list__item">
          <span className="number">4</span>
          <p>Onboarding; Meet the team and agree on reporting cadence</p>
        </li>
        <li className="list__item">
          <span className="number">5</span> <p>Growth! Growth! Growth!</p>
        </li>
      </ul>
    </Wrapper>
  );
};

export default ContactUs;

const Wrapper = styled.div`
  &.section {
    background-color: var(--bg-color-secondary-lighter);
    padding: 3rem 1.5rem 6rem;
  }

  .section__subtitile {
    font-size: var(--large-font-size);
    font-weight: var(--font-medium);
    line-height: 48px;
  }

  .mb-2 {
    margin-bottom: var(--mb-2);
  }

  .accent {
    text-decoration: underline;
  }

  .list__item {
    display: flex;
    align-items: flex-start;
    margin-bottom: var(--mb-1);
  }

  .number {
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 23px;
    height: 23px;
    border: 1px solid var(--text-color-secondary);
    border-radius: 100%;
    text-align: center;
    margin-right: var(--mb-1-5);
  }

  .subsection__intro {
    font-size: var(--h1-font-size);
    margin-bottom: var(--mb-3);
  }

  @media (min-width: 768px) {
    &.section {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
      border-radius: 1.25rem;
      padding: 4.25rem;
    }

    .section__list {
      font-size: var(--h1-font-size);
    }

    .list__item {
      align-items: center;
    }

    .number {
      width: 40px;
      height: 40px;
    }
  }

  @media (min-width: 1440px) {
    &.section {
      max-width: 1200px;
      margin: 6.25rem auto;
      padding: 6.25rem;
    }
  }
`;
