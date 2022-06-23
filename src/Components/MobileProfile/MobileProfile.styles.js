import styled from "styled-components";

export const Wrapper = styled.div`
  .profile__wrapper {
    text-align: center;
    color: var(--text-color);
    background-color: var(--bg-color-secondary-dark);
  }

  .profile__wrapper:first-child {
    margin-bottom: 212px;
  }

  .profile__info {
    padding: 8rem 0 3rem 0;
  }

  .profile__img-wrapper {
    position: relative;
    width: 100%;
  }

  .profile__img {
    position: absolute;
    max-width: 100%;
    left: 0;
    right: 0;
    bottom: 2rem;
    margin-left: auto;
    margin-right: auto;
  }

  .profile__name-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: var(--mb-1-5);
  }

  .profile__name {
    font-size: var(--h1-font-size);
    font-weight: var(--font-medium);
  }

  .profile__data span {
    display: block;
  }

  .profile__data span:nth-child(2) {
    margin-top: var(--mb-1);
    margin-bottom: var(--mb-1);
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
`;
