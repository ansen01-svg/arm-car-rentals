// import { useState, useCallback, useEffect } from "react";

// export default function useMediaQuery() {
//   const [mobileScreen, setMobileScreen] = useState(window.innerWidth <= 1024);
//   const width = 1024;

//   const updateTarget = useCallback((e) => {
//     if (e.matches) {
//       setMobileScreen(true);
//     } else {
//       setMobileScreen(false);
//     }
//   }, []);

//   useEffect(() => {
//     const media = window.matchMedia(`(max-width: ${width}px)`);
//     media.addEventListener("change", updateTarget);

//     // Check on mount (callback is not called until a change occurs)
//     if (media.matches) {
//       setMobileScreen(true);
//     }

//     return () => media.removeEventListener("change", updateTarget);
//   }, [updateTarget, width]);

//   return { mobileScreen };
// }

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
