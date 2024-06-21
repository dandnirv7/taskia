export const toDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: "2-digit", month: "long", year: "numeric" };
  return date.toLocaleDateString("en-GB", options);
};

export const truncateText = (text, maxLength) => {
  if (text?.length >= maxLength) {
    return maxLength >= 50
      ? text?.substring(0, maxLength).trim().concat("...")
      : text?.substring(0, maxLength).trim();
  }

  return text;
};
