import axios from "axios";

const queryUrl = async (string) => {
  try {
    return await axios.get(`http://localhost:3000/?url=http://${string}`);
  } catch (e) {
    console.log(`Error! ${e}`);
  }
};

export default queryUrl;
