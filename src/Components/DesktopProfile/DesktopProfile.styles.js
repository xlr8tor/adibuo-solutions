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
    bottom: 2.5rem;
  }

  .swiper-pagination-bullet-active {
    background-color: var(--text-color);
  }

  @media (min-width: 768px) {
    .swiper-horizontal > .swiper-pagination-bullets {
      transform: scale(1.5);
    }
  }

  @media (min-width: 1150px) {
    .swiper-horizontal > .swiper-pagination-bullets {
      bottom: 4.5rem;
      left: -41.5%;
      transform: scale(2);
    }
  }

  @media (min-width: 1440px) {
    .swiper-horizontal > .swiper-pagination-bullets {
      bottom: 4.5rem;
      left: -32rem;
      transform: scale(2);
    }
  }
`;
