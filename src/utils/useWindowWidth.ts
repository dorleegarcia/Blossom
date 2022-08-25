import { useEffect } from "react";

import isMobile from "./windowWidth";

const useWindowWidth = (
  setWindowWidthMobile: (arg0: boolean) => void
): void => {
  const handleWindowSize = () => {
    setWindowWidthMobile(true);
    if (!isMobile()) setWindowWidthMobile(false);
  };

  useEffect(() => {
    handleWindowSize();

    window.addEventListener("resize", handleWindowSize);
    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  });
};

export default useWindowWidth;
