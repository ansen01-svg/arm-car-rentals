import fetchCars from "./_lib/frontend/fetch_admin_cars";
import fetchUsers from "./_lib/frontend/fetchUsers";
import fetchBookings from "./_lib/frontend/fetchBookings";

export default async function sitemap() {
  const cars = await fetchCars();
  const users = await fetchUsers();
  const bookings = await fetchBookings();

  // /car/[id] urls
  const carIdUrls = cars.map((car) => {
    return {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/cars/${car._id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    };
  });

  // /fleet/[id] urls
  const fleetIdUrls = cars.map((car) => {
    return {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/fleet/${car._id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    };
  });

  // /users/[id] urls
  const userIdUrls = users.map((user) => {
    return {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/users/${user._id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    };
  });

  // /bookings/[id] urls
  const bookingIdUrls = bookings.map((booking) => {
    return {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/bookings/${booking._id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    };
  });

  return [
    {
      url: process.env.NEXT_PUBLIC_DOMAIN,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/signup`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/signin`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/verify_email`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/resetPassword`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/reset_password`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/cars`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...carIdUrls,
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/checkout`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/bookingConfirmation`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/trips`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/fleet`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/fleet/new`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...fleetIdUrls,
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/users`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...userIdUrls,
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/bookings`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...bookingIdUrls,
  ];
}
