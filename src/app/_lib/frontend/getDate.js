function getDate(date) {
  const dateArr = date.split("/");
  const day = dateArr[0];
  const month = dateArr[1];
  const year = "20" + dateArr[2];
  const myDate = `${year}-${month}-${day}`;

  return myDate;
}

export default getDate;
