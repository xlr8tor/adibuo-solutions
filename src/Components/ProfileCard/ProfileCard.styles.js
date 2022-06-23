import styled from "styled-components";

export const Wrapper = styled.div`
  &.profile {
    grid-auto-flow: column;
    align-items: center;
    gap: 2rem;
    background-color: var(--bg-color-secondary-dark);
    color: var(--text-color);
    border-radius: 1.25rem;
    padding: 3rem 2rem 4.5rem;
    min-height: 472px;
  }

  .profile__data {
    white-space: normal;
    overflow-wrap: break-word;
    word-break: break-word;
    font-size: var(--normal-font-size);
    font-weight: var(--font-light);
    line-height: 24px;
  }

  .profile__data span {
    display: block;
  }

  .profile__data span:nth-child(2) {
    margin-top: var(--mb-0-5);
    margin-bottom: var(--mb-0-5);
  }

  .profile__img-wrap {
    width: 100%;
    max-width: 200px;
    height: auto;
    order: -1;
  }

  .profile__img {
    object-fit: cover;
    flex-shrink: 1;
    max-width: 100%;
    float: right;
  }

  .profile__name-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: var(--mb-0-5);
  }

  .accent {
    display: flex;
    padding: 5px;
    background: #fff;
    border-radius: 50%;
    color: var(--text-color-secondary);
  }

  .socials-link {
    margin-left: var(--mb-1-5);
  }

  .socials-icon {
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    &.profile {
      gap: 6.5rem;
      padding: 6rem 4rem 7.5rem;
      height: 488px;
    }

    .profile__name-wrapper {
      margin-bottom: var(--mb-1);
    }

    .profile__name {
      font-size: var(--h1-font-size);
    }
  }

  @media (min-width: 1440px) {
    &.profile {
      max-width: 1200px;
      margin: 0 auto;
      height: 456px;
    }

    .profile__name-wrapper {
      margin-bottom: var(--mb-2);
    }
  }
`;
