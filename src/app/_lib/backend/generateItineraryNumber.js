const generateItineraryNumber = () => {
  // Generate a random number between 1,000,000,000,000 and 9,999,999,999,999
  const itineraryNumber =
    Math.floor(Math.random() * 9000000000000) + 1000000000000;

  return itineraryNumber;
};

export default generateItineraryNumber;
