import styled from "styled-components";

export const Wrapper = styled.section`
  &.section {
    margin-top: 4.5rem;
    margin-bottom: 4.5rem;
  }

  .section-title {
    font-size: var(--big-font-size);
    text-align: center;
    color: var(--text-color-secondary);
    margin-bottom: var(--mb-1-5);
  }

  .section-content {
    border: 1px solid var(--bg-color-secondary-lighter);
    border-radius: 1.25rem;
    padding: 1.875rem;
  }

  .section-description {
    text-align: center;
    margin-top: 1.875rem;
    margin-bottom: 5.125rem;
  }

  .values__list {
    max-width: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .value__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: var(--bg-color-secondary-lighter);
    border-radius: 50%;
    font-size: var(--h1-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--text-color);
    cursor: pointer;
  }

  .value__item.active {
    background-color: var(--bg-color-secondary-light);
  }

  @media (min-width: 1440px) {
    &.section {
      line-height: 36px;
      font-size: var(--h1-font-size);
      max-width: 1200px;
      margin: 9.375rem auto;
    }
  }
`;
