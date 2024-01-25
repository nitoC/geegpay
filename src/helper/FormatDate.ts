function getCurrentDate() {
  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(currentDate);
  return formattedDate;
}

// Example usage:

export default getCurrentDate;
