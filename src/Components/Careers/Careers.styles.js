import styled from "styled-components";

export const Wrapper = styled.section`
  .hiring {
    margin-top: 8.75rem;
    margin-bottom: 4.5rem;
  }

  .hiring__item {
    display: flex;
    align-items: center;
  }

  .icon__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    background-color: var(--bg-color-secondary-lighter);
    border-radius: 5px;
  }

  .icon__wrapper img {
    max-width: 100%;
  }

  .hiring__title {
    font-size: 36px;
    font-weight: var(--font-semi-bold);
    line-height: 48px;
    margin-bottom: var(--mb-2);
  }

  .text__content {
    font-size: var(--h1-font-size);
    line-height: 64px;
    margin-left: var(--mb-1-5);
  }

  .carousel {
    margin-bottom: 3rem;
  }

  .carousel__list--wrapper {
    margin-bottom: var(--mb-2-5);
    gap: 12px;
    align-items: center;
  }

  .carousel__list--title {
    font-size: var(--h1-font-size);
    font-weight: var(--font-semi-bold);
    line-height: 32px;
  }

  .carousel-accent {
    font-size: 12px;
    font-weight: var(--font-medium);
  }

  .carousel__list {
    grid-auto-flow: column;
    background-color: var(--bg-color-secondary-lighter);
    border-radius: 1.5rem;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .carousel__list::-webkit-scrollbar {
    display: none;
  }

  .carousel__list .carousel__dot {
    background-color: transparent;
    color: inherit;
    font: inherit;
    border: none;
    white-space: nowrap;
    padding: 0.75rem 2rem;
  }

  .carousel__list > .carousel__dot.carousel__dot--selected {
    color: var(--text-color);
    background-color: var(--bg-color-secondary-light);
    border-radius: 1.5rem;
  }

  @media (min-width: 768px) {
    .hiring {
      margin-top: 7.2rem;
      margin-bottom: 3.85rem;
    }

    .hiring__list {
      grid-auto-flow: column;
    }

    .carousel {
      margin-top: 4.5rem;
      margin-bottom: 4.5rem;
    }

    .carousel__list--wrapper {
      margin-bottom: 1.5rem;
      gap: 0;
    }

    .carousel__list {
      gap: 0;
    }

    .carousel__list .carousel__dot {
      font-size: var(--smaller-font-size);
      padding: 0.5rem 2rem;
    }
  }

  @media (min-width: 1024px) {
    .hiring {
      margin-top: 9.2rem;
      margin-bottom: 5.85rem;
    }

    .carousel__list {
      border-radius: 2rem;
      gap: 0;
    }

    .carousel__list--wrapper {
      grid-auto-flow: column;
      margin-bottom: 3.125rem;
    }

    .carousel__list > .carousel__dot.carousel__dot--selected {
      border-radius: 2rem;
    }
  }

  @media (min-width: 1440px) {
    .hiring {
      margin-top: 11.2rem;
      margin-bottom: 7.85rem;
      margin-left: auto;
      margin-right: auto;
      max-width: 1200px;
    }

    .carousel {
      margin-top: 6.43rem;
      margin-bottom: 6.43rem;
    }

    .icon__wrapper {
      height: 75px;
      width: 75px;
    }

    .text__content {
      font-size: var(--big-font-size);
      margin-left: 4.65rem;
    }

    .hiring__title {
      font-size: 48px;
      line-height: 64px;
      margin-bottom: 3.125rem;
    }

    .carousel__list--wrapper {
      grid-auto-flow: column;
      margin-bottom: 3.125rem;
      margin-left: auto;
      margin-right: auto;
      max-width: 1200px;
    }

    .carousel__list--title {
      font-size: var(--big-font-size);
      font-weight: var(--font-semi-bold);
      line-height: 64px;
    }
  }
`;
