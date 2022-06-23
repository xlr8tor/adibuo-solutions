import styled from "styled-components";

export const Wrapper = styled.section`
  &.section {
    background-color: var(--bg-color-secondary-dark);
    color: var(--text-color);
    text-align: center;
  }

  .section__content {
    padding-top: 9.5rem;
    gap: 3rem;
  }

  .section__tagline {
    font-size: var(--large-font-size);
    line-height: 45px;
  }

  .section__img-wrap {
    width: 100%;
    max-width: 1200px;
  }

  .section__img {
    width: 100%;
  }

  @media (min-width: 768px) {
    &.section {
      font-size: 24px;
      line-height: 48px;
    }

    .section__content {
      padding-top: 7rem;
      gap: 3rem;
    }
  }

  @media (min-width: 1024px) {
    .section__tagline {
      font-size: 32px;
      line-height: 58px;
    }

    .section__content {
      padding-top: 9rem;
      gap: 4rem;
    }
  }

  @media (min-width: 1440px) {
    .section__tagline {
      font-size: 48px;
      line-height: 64px;
    }

    .section__content {
      max-width: 1200px;
      margin: 0 auto;
    }
  }
`;
