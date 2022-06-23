import { useState, useEffect, useCallback } from "react";

const preventDefault = (event) => {
  if (event.preventDefault) {
    event.preventDefault();
  }
  event.returnValue = false;
};

const enableBodyScroll = () => {
  document && document.removeEventListener("wheel", preventDefault, false);
};

const disableBodyScroll = () => {
  document &&
    document.addEventListener("wheel", preventDefault, {
      passive: false,
    });
};

const usePreventBodyScroll = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    hidden ? disableBodyScroll() : enableBodyScroll();
    return enableBodyScroll;
  }, [hidden]);

  const disableScroll = useCallback(() => setHidden(true), []);
  const enableScroll = useCallback(() => setHidden(false), []);
  return { disableScroll, enableScroll };
};

export default usePreventBodyScroll;
