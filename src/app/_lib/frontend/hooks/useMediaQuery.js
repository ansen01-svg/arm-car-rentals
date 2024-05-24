import { useState, useCallback, useEffect, useLayoutEffect } from "react";

export default function useMediaQuery() {
  const [mobileScreen, setMobileScreen] = useState(null);

  const updateTarget = useCallback((e) => {
    setMobileScreen(e.matches);
  }, []);

  useLayoutEffect(() => {
    const media = window.matchMedia(`(max-width: 1024px)`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    setMobileScreen(media.matches);

    return () => media.removeEventListener("change", updateTarget);
  }, [updateTarget]);

  return { mobileScreen };
}
