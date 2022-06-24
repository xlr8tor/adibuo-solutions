import { useContext, useState, useEffect } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const caretStyle = {
  fontSize: "50px",
  color: "var(--bg-color-secondary-light)",
};

const Arrow = ({ children, disabled, onClick }) => {
  const style = {
    background: "none",
    color: "inherit",
    border: "none",
    padding: 0,
    font: "inherit",
    fontWeight: "var(--font-light)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? "0.3" : "1",
    outline: "inherit",
  };

  return (
    <button disabled={disabled} onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export const LeftArrow = () => {
  const {
    isFirstItemVisible,
    scrollPrev,
    visibleItemsWithoutSeparators,
    initComplete,
  } = useContext(VisibilityContext);

  const [disabled, setDisabled] = useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );

  useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollPrev()}>
      <IoIosArrowBack style={caretStyle} />
    </Arrow>
  );
};

export const RightArrow = () => {
  const { isLastItemVisible, scrollNext, visibleItemsWithoutSeparators } =
    useContext(VisibilityContext);

  const [disabled, setDisabled] = useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible
  );

  useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow
      disabled={disabled}
      onClick={() => {
        console.log("here");
        scrollNext();
      }}
    >
      <IoIosArrowForward style={caretStyle} />
    </Arrow>
  );
};
