const changeTitle = (title) => {
  let modifiedTitle = "";

  switch (title) {
    case "twoto5k":
      return (modifiedTitle = "2000-5000");

    case "fiveto10k":
      return (modifiedTitle = "5000-10000");

    case "tenkAndAbove":
      return (modifiedTitle = "above 10000");

    case "twoToFour":
      return (modifiedTitle = "2-4");

    case "twoToSix":
      return (modifiedTitle = "2-6");

    default:
      return (modifiedTitle = title);
  }
};

export default changeTitle;
