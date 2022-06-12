import styled from "styled-components";

const JobCard = ({ position, description, responsibility }) => {
  return (
    <Wrapper className="card">
      <h3 className="card__title">{position}</h3>
      <p className="card__description">{description}</p>
      <ul className="card__list">
        {responsibility.map((item, index) => {
          return (
            <li key={index} className="card__item">
              <span className="card__data"> {item}</span>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default JobCard;

const Wrapper = styled.div`
  &.card {
    background-color: var(--bg-color-secondary-dark);
    color: var(--text-color);
    border-radius: 1.25rem;
    padding: 3rem 1.5rem;
    height: 100%;
  }

  .card__title {
    font-size: var(--h1-font-size);
    font-weight: var(--font-semi-bold);
    line-height: 36px;
    margin-bottom: var(--mb-1-5);
  }

  .card__description {
    font-weight: var(--font-medium);
    line-height: 24px;
    margin-bottom: var(--mb-1-5);
  }

  .card__list {
    list-style: disc;
    padding: 0 1.5rem;
  }

  @media (min-width: 768px) {
    &.card {
      padding: 2rem;
    }
  }

  @media (min-width: 1024px) {
    &.card {
      padding: 3rem;
    }
  }

  @media (min-width: 1440px) {
    &.card {
      padding: 3.125rem;
      max-width: 1200px;
      margin: 0 auto;
    }
  }
`;
