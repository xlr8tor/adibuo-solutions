import styled from "styled-components";

export const Wrapper = styled.section`
  .section {
    margin-top: 8.75rem;
    margin-bottom: 4.5rem;
    justify-items: center;
  }

  .section__img-wrap,
  .section__img {
    max-width: 100%;
  }

  .section__subtitile {
    font-size: var(--large-font-size);
    font-weight: var(--font-medium);
    line-height: 48px;
    color: var(--bg-color-secondary-light);
    margin-bottom: var(--mb-1-5);
  }

  .text-block {
    display: block;
  }

  .text-block:first-child {
    margin-bottom: var(--mb-1);
  }

  @media (min-width: 768px) {
    .section {
      grid-auto-flow: column;
      grid-template-columns: 1fr 1fr;
      justify-items: end;
      align-items: center;
    }

    .section__img-wrap {
      order: 1;
    }
  }

  @media (min-width: 1024px) {
    .section__subtitile {
      font-size: 3rem;
      line-height: 64px;
    }

    .text-block {
      font-size: var(--h3-font-size);
    }
  }
`;
