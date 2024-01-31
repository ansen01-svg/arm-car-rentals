export default function getMilliseconds(timeString, date) {
  // Get the current date to set the date part
  const currentDate = new Date(date);

  // Create a new date object using the current date and the parsed time string
  const dateTime = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );

  // Parse the time string and set the hours and minutes
  const [hours, minutes] = timeString.split(":").map((field) => {
    return parseInt(field.split(" ")[0]);
  });

  dateTime.setHours(
    (hours % 12) + (timeString.toLowerCase().includes("pm") ? 12 : 0),
    minutes
  );

  // Set milliseconds to 0
  dateTime.setMilliseconds(0);

  // Get the time in milliseconds since the Unix epoch
  const timeInMilliseconds = dateTime.getTime();

  return timeInMilliseconds;
}
