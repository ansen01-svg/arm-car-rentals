import { useState, useCallback, useEffect } from "react";

export default function useMediaQuery() {
  const [mobileScreen, setMobileScreen] = useState(true);
  const width = 1024;

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setMobileScreen(true);
    } else {
      setMobileScreen(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setMobileScreen(true);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, [updateTarget, width]);

  return { mobileScreen };
}
