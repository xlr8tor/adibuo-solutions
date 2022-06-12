import styled from "styled-components";

export const Wrapper = styled.div`
  &.profile {
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    background-color: var(--bg-color-secondary-dark);
    color: var(--text-color);
    border-radius: 1.25rem;
  }

  .profile__data {
    white-space: normal;
    overflow-wrap: break-word;
    word-break: break-word;
    font-size: var(--normal-font-size);
  }

  .profile__img-wrap {
    width: 100%;
  }

  .profile__img {
    object-fit: cover;
    flex-shrink: 1;
    max-width: 100%;
    float: right;
  }

  @media (min-width: 1024px) {
    .profile__content {
      padding: 2.8rem 3rem;
    }

    .profile__data {
      white-space: pre-line;
    }

    .profile__name {
      margin-bottom: var(--mb-1);
    }
  }

  @media (min-width: 1440px) {
    &.profile {
      max-width: 1200px;
      margin: 0 auto;
    }
    .profile__content {
      padding: 5.625rem 4.125rem;
    }

    .profile__name {
      margin-bottom: var(--mb-2);
    }
  }
`;
