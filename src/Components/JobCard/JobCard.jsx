import { useState, useRef, useEffect } from "react";
import classnames from "classnames";
import lodash from "lodash";
import { useWindowWidth } from "../../Hooks/useWindowWidth";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

const JobCard = ({ position, description, responsibility }) => {
  const containerRef = useRef();
  const [clamped, setClamped] = useState(true);
  const [showButton, setShowButton] = useState(true);
  const isVisible = useWindowWidth() <= 768 ? true : false;

  const handleClick = () => setClamped(!clamped);

  useEffect(() => {
    const hasClamping = (el) => {
      const { clientHeight, scrollHeight } = el;
      return clientHeight !== scrollHeight;
    };

    const checkButtonAvailability = () => {
      if (containerRef.current) {
        // Save current state to reapply later if necessary.
        const hadClampClass = containerRef.current.classList.contains("clamp");
        // Make sure that CSS clamping is applied if aplicable.
        if (!hadClampClass) containerRef.current.classList.add("clamp");
        // Check for clamping and show or hide button accordingly.
        setShowButton(hasClamping(containerRef.current));
        // Sync clamping with local state.
        if (!hadClampClass) containerRef.current.classList.remove("clamp");
      }
    };

    const debouncedCheck = lodash.debounce(checkButtonAvailability, 50);

    checkButtonAvailability();
    window.addEventListener("resize", debouncedCheck);

    return () => {
      window.removeEventListener("resize", debouncedCheck);
    };
  }, [containerRef]);

  return (
    <Wrapper className="card">
      <h3 className="card__title">{position}</h3>
      <p
        className={classnames("card__description", clamped && "clamp")}
        ref={containerRef}
      >
        {description}
      </p>
      {showButton || isVisible ? (
        <button className="btn-readmore" onClick={handleClick}>
          Read {clamped ? "more" : "less"}
          <IoIosArrowDown
            className={classnames("icon-caret", !clamped && "opened")}
          />
        </button>
      ) : null}

      <ul className={classnames("card__list", !clamped && "open")}>
        {responsibility.map((item, index) => {
          return (
            <li key={index} className="card__item">
              <span className="card__data"> {item}</span>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default JobCard;

const Wrapper = styled.div`
  &.card {
    background-color: var(--bg-color-secondary-dark);
    color: var(--text-color);
    border-radius: 1.25rem;
    padding: 3rem 1.5rem;
    min-height: 324px;
  }

  .card__title {
    font-size: var(--h1-font-size);
    font-weight: var(--font-semi-bold);
    line-height: 36px;
    margin-bottom: var(--mb-1-5);
  }

  .card__description {
    font-weight: var(--font-medium);
    line-height: 24px;
    margin-bottom: var(--mb-1);
  }

  .card__list {
    display: none;
    list-style: disc;
    padding: 0 1.5rem;
    margin-top: var(--mb-1);
  }

  .open {
    display: block;
  }

  .clamp {
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow-wrap: break-word;
  }

  .btn-readmore {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    font-weight: var(--font-light);
    cursor: pointer;
    outline: inherit;
  }

  .icon-caret {
    vertical-align: middle;
    margin-left: var(--mb-0-5);
    transition: all 0.6s ease;
  }

  .opened {
    transform: rotate(180deg);
  }

  @media (min-width: 768px) {
    &.card {
      padding: 2rem;
      height: 100%;
    }

    .card__list {
      display: block;
    }

    .btn-readmore {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    &.card {
      padding: 3rem;
    }
  }

  @media (min-width: 1440px) {
    &.card {
      padding: 3.125rem;
      max-width: 1200px;
      margin: 0 auto;
    }
  }
`;
