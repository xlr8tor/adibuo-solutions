import styled from "styled-components";

export const Wrapper = styled.footer`
  &.footer {
    background-color: var(--bg-color-secondary-dark);
    color: var(--text-color);
    padding: 1.5rem;
    text-align: center;
  }

  .footer__header {
    background-color: var(--bg-color-secondary-light);
    padding: 1.875rem 1.5rem;
    border-radius: 1.25rem;
  }

  .subsection-title {
    font-size: var(--h1-font-size);
    font-weight: var(--font-medium);
    line-height: 36px;
  }

  .subsection-description {
    margin-top: var(--mb-1);
  }

  .footer__item {
    font-weight: var(--font-medium);
    margin-bottom: var(--mb-0-5);
  }

  .footer__contact-title {
    font-weight: var(--font-medium);
  }

  .footer__contact-title,
  .footer__contact-email {
    margin-bottom: var(--mb-0-5);
  }

  .footer__contact-phone {
    margin-bottom: var(--mb-1-5);
    font-weight: var(--font-regular);
  }

  .footer__links {
    grid-auto-flow: column;
    justify-content: center;
  }

  svg.socials-icon {
    font-size: 20px;
    margin-bottom: 0.4rem;
  }

  .copywrite {
    margin-top: var(--mb-2);
    color: #79808b;
  }

  @media (min-width: 768px) {
    &.footer {
      padding: 3rem 1.5rem;
      text-align: left;
    }

    .grid {
      grid-auto-flow: column;
      align-items: center;
      justify-content: space-between;
      justify-items: center;
    }

    .footer__links {
      justify-content: start;
    }

    .footer__contact-phone {
      margin-bottom: var(--mb-0-5);
    }

    .copywrite {
      grid-row: 2;
      grid-column: 1/4;
      justify-self: start;
    }
  }

  @media (min-width: 1024px) {
    &.footer {
      padding: 3rem 1.5rem;
    }
    .footer__header {
      padding: 1.875rem 3.125rem;
    }

    .grid {
      grid-auto-flow: column;
      align-items: center;
    }
  }

  @media (min-width: 1440px) {
    &.footer {
      padding: 3rem 7.5rem;
    }

    .footer__wrapper {
      max-width: 1200px;
      margin: 0 auto;
    }
  }
`;

// @media (min-width: 1440px) {
//   &.section {
//     line-height: 36px;
//     font-size: var(--h1-font-size);

//     margin: 9.375rem auto;
//   }
// }
