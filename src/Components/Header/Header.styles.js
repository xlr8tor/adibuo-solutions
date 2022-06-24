import styled from "styled-components";

export const Wrapper = styled.header`
  &.header {
    position: fixed;
    top: 0;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    padding: 1.875rem 1.5rem;
    background-color: var(--text-color);
    z-index: 100;
    width: 100%;
  }

  &.scroll-header {
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
  }

  .header__section {
    display: flex;
  }

  .nav__wrapper {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: -moz-available;
    height: -webkit-fill-available;
    height: fill-available;
    overflow: hidden;
    z-index: 100;
  }

  .nav__wrapper-close {
    height: 0;
  }

  .nav {
    background-color: var(--bg-color-secondary-lighter);
    height: inherit;
    float: right;
    padding: 1.5rem;
    width: 60%;
    transform: translateX(300px);
    transition: transform 0.5s;
  }

  .nav.nav__open {
    transform: translateX(0);
  }

  .close__btn {
    position: absolute;
    right: 1.4rem;
  }

  .nav__item {
    display: flex;
    flex-flow: column nowrap;
    margin-bottom: var(--mb-1-5);
  }

  .nav__link {
    font-size: var(--h3-font-size);
    font-weight: var(--font-medium);
  }

  .logo {
    width: 119.73px;
    height: 20px;
  }

  .active {
    font-weight: var(--font-semi-bold);
    text-decoration: none;
  }

  @media (min-width: 768px) {
    &.header {
      position: fixed;
      grid-auto-flow: row;
      align-items: center;
      justify-content: initial;
      width: 100%;
      top: 0;
      padding: 1.5rem 2rem;
      margin: auto;
      background-color: "#fff";
      color: var(--text-color-secondary);
    }

    .nav__wrapper {
      position: initial;
      height: inherit;
      width: inherit;
      overflow: visible;
      background-color: transparent;
    }

    .nav {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
      background-color: transparent;
      padding: 0;
      transform: translateX(0px);
      transition: none;
    }

    .header__section {
      width: 100%;
      align-items: center;
    }

    .nav__list {
      display: flex;
      margin: 0;
      gap: 2rem;
    }

    .nav__link {
      font-size: 0.875rem;
    }

    .nav__item {
      display: block;
      margin: 0;
    }

    .close__btn {
      display: none;
    }
  }

  @media (min-width: 1440px) {
    &.header {
      padding: 1.5rem 7.5rem;
    }

    .header__section {
      max-width: 1200px;
      margin: 0 auto;
    }

    .nav__list {
      gap: 3.125rem;
    }
  }
`;
