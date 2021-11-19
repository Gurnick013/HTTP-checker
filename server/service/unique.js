const unique = (array) => {
  return array.filter(
    (part, i, arr) => arr.findIndex((item) => item.url === part.url) === i);
};

export default unique;
