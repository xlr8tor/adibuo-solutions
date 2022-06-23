import styled from "styled-components";

export const Wrapper = styled.div`
  .portfolio__container {
    margin: 0 auto;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    content: "";
  }

  /* .swiper-pagination {
    text-align: right;
  } */

  .swiper-horizontal > .swiper-pagination-bullets {
    bottom: var(--mb-2);
    left: 40%;
    transform: scale(1.5);
  }

  .swiper-pagination-bullet-active {
    background-color: var(--text-color);
  }

  @media (min-width: 1150px) {
    .swiper-horizontal > .swiper-pagination-bullets {
      bottom: var(--mb-2);
      left: 41.5%;
      transform: scale(2);
    }
  }

  @media (min-width: 1440px) {
    .swiper-horizontal > .swiper-pagination-bullets {
      left: 32rem;
    }
  }
`;
