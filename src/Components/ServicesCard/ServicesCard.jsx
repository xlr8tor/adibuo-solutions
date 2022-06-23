import { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import styled from "styled-components";

const ServiceCard = ({ title, text, itemId }) => {
  const visibility = useContext(VisibilityContext);

  return (
    <Wrapper className="card">
      <h3 className="card__title">{title}</h3>
      <p className="card__body">{text}</p>
    </Wrapper>
  );
};

export default ServiceCard;

const Wrapper = styled.div`
  &.card {
    border: 1px solid var(--bg-color-secondary-lighter);
    background-color: var(--text-color);
    padding: 2rem 2.125rem;
    border-radius: 1.25rem;
    width: 100%;
    height: 100%;
  }

  .card__title {
    font-size: var(--h1-font-size);
    font-weight: var(--font-medium);
    margin-bottom: var(--mb-1-5);
    color: var(--bg-color-secondary-light);
  }

  @media (min-width: 768px) {
    &.card {
      border: 1px solid var(--bg-color-secondary-lighter);
      padding: 3rem 3.125rem;
      border-radius: 1.25rem;
      width: 450px;
      height: 100%;
    }
  }

  @media (min-width: 1024px) {
    &.card {
      padding: 3.5rem 3.125rem;
      width: 450px;
    }
  }

  @media (min-width: 1440px) {
    &.card {
      padding: 5.5rem 3.125rem;
      width: 450px;
    }
  }
`;
