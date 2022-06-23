import styled from "styled-components";

export const Wrapper = styled.section`
  &.section {
    min-height: 100vh;
  }

  .section__wrapper {
    grid-auto-flow: row;
    gap: 0;
  }

  .section__content {
    position: relative;
    margin-top: 8.75rem;
    margin-bottom: var(--mb-3);
  }

  .section__title {
    font-size: var(--big-font-size);
    line-height: 48px;
    margin-bottom: var(--mb-1-5);
  }

  .accent {
    color: var(--bg-color-secondary-light);
  }

  .nav__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 10px;
    font-weight: var(--font-medium);
    line-height: 24px;
    background-color: var(--bg-color-secondary-lighter);
    border-radius: 1.25rem;
  }

  .nav__item:first-child {
    padding-left: 21px;
  }

  .nav__item:last-child {
    background-color: var(--bg-color-secondary-light);
    border-radius: 1.25rem;
    padding: 8px 21px;
    color: var(--text-color);
  }

  .section__description {
    margin-bottom: var(--mb-1-5);
  }

  .home__img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    .section__content {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      padding-top: 8.75rem;
      padding-bottom: var(--mb-3);
      margin-top: 0;
      margin-bottom: 0;
    }

    .section__title {
      font-size: 36px;
      line-height: 50px;
      max-width: 600px;
      margin-top: 0;
    }

    .section__description {
      max-width: 600px;
    }

    .section__wrapper {
      min-height: 100vh;
      grid-auto-flow: column;
      grid-template-columns: 2fr 1fr;
    }

    .nav__list {
      max-width: 600px;
      font-size: 12px;
      margin-bottom: 3rem;
    }

    .home__img:before {
      content: "";
      background: linear-gradient(
        180deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(0, 0, 0, 1) 3%,
        rgba(255, 255, 255, 1) 39%
      );
      z-index: 1;
    }

    .home__img {
      height: 100%;
      object-fit: cover;
    }
  }

  @media (min-width: 1024px) {
    .section__title {
      font-size: 54px;
      line-height: 72px;
      max-width: 600px;
      margin-top: 0;
    }
  }

  @media (min-width: 1441px) {
    &.section {
      min-height: 100vh;
    }

    .container {
      margin: 0 auto;
    }
  }
`;
