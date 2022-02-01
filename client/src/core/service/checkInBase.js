const isRepeatUrl = (data, string) => {
  if (!data && !string) return false;  
  const url = `https://${string}`;
  const filter = data.filter((el) => el.url === url);
  return !filter.length;
};

export default isRepeatUrl;
