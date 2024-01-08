"use client";

import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [mobileScreen, setMobileScreen] = useState(true);
  const [desktopScreen, setDesktopScreen] = useState(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    if (windowWidth < "1024") {
      setMobileScreen(true);
      setDesktopScreen(false);
    } else {
      setMobileScreen(false);
      setDesktopScreen(true);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return { mobileScreen, desktopScreen };
};

export default useWindowWidth;
