import styled from "styled-components";

export const Wrapper = styled.section`
  &.section {
    margin-top: var(--mb-3);
    margin-bottom: var(--mb-3);
    padding-bottom: 7.5rem;
    text-align: center;
  }

  .text__section {
    display: block;
    margin-bottom: var(--mb-2);
  }

  @media (min-width: 768px) {
    &.section {
      padding-bottom: 1.25rem;
    }
  }

  @media (min-width: 1024px) {
    &.section {
      line-height: 36px;
      font-size: var(--h1-font-size);
      margin-top: 6.25rem;
      margin-bottom: 6.25rem;
      padding-bottom: 0;
    }
  }

  @media (min-width: 1440px) {
    &.section {
      margin: 6.25rem auto;
      max-width: 1200px;
    }
  }
`;
