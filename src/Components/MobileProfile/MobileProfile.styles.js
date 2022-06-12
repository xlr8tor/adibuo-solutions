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

  .profile__data {
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
    bottom: 3rem;
    margin-left: auto;
    margin-right: auto;
  }

  .profile__name {
    font-size: var(--h1-font-size);
    font-weight: var(--font-medium);
    margin-bottom: var(--mb-1-5);
  }

  .profile__info {
    white-space: pre-line;
  }
`;
