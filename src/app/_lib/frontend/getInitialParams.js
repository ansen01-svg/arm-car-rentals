import dayjs from "dayjs";

export default function getInitialParams(searchParams) {
  let params = [];

  if (Object.keys(searchParams).length > 0) {
    const {
      pickupDate,
      dropoffDate,
      pickupTime,
      dropoffTime,
      carType,
      capacity,
      specifications,
      price,
    } = searchParams;

    if (pickupDate && dropoffDate && pickupTime && dropoffTime) {
      params = [
        { pickupDate: dayjs(pickupDate) },
        { dropoffDate: dayjs(dropoffDate) },
        { pickupTime: dayjs(pickupTime) },
        { dropoffTime: dayjs(dropoffTime) },
      ];
    }

    if (carType) {
      params.push({ carType: carType.split(",") });
    }
    if (capacity) {
      params.push({ capacity: capacity.split(",") });
    }
    if (price) {
      params.push({ price: price.split(",") });
    }
    if (specifications) {
      params.push({ specifications: specifications.split(",") });
    }
    return params;
  } else {
    return params;
  }
}
