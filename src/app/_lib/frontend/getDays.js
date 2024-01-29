function calculateDaysBetweenDates(date1, date2) {
  // Create Date objects for the input dates
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  // Calculate the difference in milliseconds
  const timeDifference = Math.abs(d2.getTime() - d1.getTime());

  // Convert the difference to days
  const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

  return daysDifference;
}

export default calculateDaysBetweenDates;
