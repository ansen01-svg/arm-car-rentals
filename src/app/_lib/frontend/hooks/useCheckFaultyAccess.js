import { useEffect, useState } from "react";
import dayjs from "dayjs";

const useCheckFaultyAccess = (searchParams) => {
  const [faultyAccess, setIsFaultyAccess] = useState(false);

  useEffect(() => {
    const pickupDateMissing = !Object.keys(searchParams).includes("pickupDate");
    const dropoffDateMissing =
      !Object.keys(searchParams).includes("dropoffDate");
    const pickupTimeMissing = !Object.keys(searchParams).includes("pickupTime");
    const dropoffTimeMissing =
      !Object.keys(searchParams).includes("dropoffTime");

    // checks
    // 1 check for empty params
    // 2 check for missing params
    // 3 check for invalid dates
    if (Object.keys(searchParams).length === 0) {
      setIsFaultyAccess(true);
    } else if (
      Object.keys(searchParams).length > 0 &&
      (pickupDateMissing ||
        dropoffDateMissing ||
        pickupTimeMissing ||
        dropoffTimeMissing)
    ) {
      setIsFaultyAccess(true);
    } else {
      const invalidPickupDate =
        dayjs(searchParams.pickupDate).format() === "Invalid Date";

      const invalidDropoffDate =
        dayjs(searchParams.dropoffDate).format() === "Invalid Date";

      const invalidPickupTime =
        dayjs(searchParams.pickupTime).format() === "Invalid Date";

      const invalidDropoffTime =
        dayjs(searchParams.dropoffTime).format() === "Invalid Date";

      if (
        invalidPickupDate ||
        invalidDropoffDate ||
        invalidPickupTime ||
        invalidDropoffTime
      ) {
        setIsFaultyAccess(true);
      } else {
        setIsFaultyAccess(false);
      }
    }
  }, [searchParams]);

  return { faultyAccess };
};

export default useCheckFaultyAccess;
