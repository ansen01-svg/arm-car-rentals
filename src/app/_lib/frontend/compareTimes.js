const compareTimes = (time1, time2) => {
  // Convert times to minutes since midnight
  const minutesSinceMidnight1 = calculateTimeSinceMidnight(time1);
  const minutesSinceMidnight2 = calculateTimeSinceMidnight(time2);

  // Check if the first time is earlier than the second time
  return minutesSinceMidnight1 < minutesSinceMidnight2;
};

const convertToMinutesSinceMidnight = (time) => {
  // Parse the time string to get hours and minutes
  const [hours, minutes] = time.split(" ")[0].split(":").map(Number);
  console.log(hours, minutes);
  // Convert to minutes since midnight
  const minutesSinceMidnight = hours * 60 + minutes;

  console.log(calculateTimeSinceMidnight(time));

  return minutesSinceMidnight;
};

function calculateTimeSinceMidnight(time) {
  // Parse the time string to get hours and minutes
  const [hours, minutes, period] = time.match(/(\d+):(\d+) ([ap]m)/).slice(1);

  // Convert hours to 24-hour format
  const hours24 =
    period === "pm" ? parseInt(hours, 10) + 12 : parseInt(hours, 10);

  // Calculate time since midnight in minutes
  const minutesSinceMidnight = hours24 * 60 + parseInt(minutes, 10);

  return minutesSinceMidnight;
}

export default compareTimes;
