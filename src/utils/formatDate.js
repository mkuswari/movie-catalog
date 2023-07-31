const formatDate = (releaseDate) => {
  const date = new Date(releaseDate);
  const formatDate = date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return formatDate;
};

export default formatDate;
