import axios from "axios";

export const queryUrl = async (string) => {
  try {
    return await axios.get(`http://localhost:3000/?url=https://${string}`);
  } catch (e) {
    console.log(`Error! ${e}`);
  }
};

export const queryDataBase = async () => {
  try {
    return await axios.get(`http://localhost:3000/db`);
  } catch (e) {
    console.log(`Error! ${e}`);
  }
};

