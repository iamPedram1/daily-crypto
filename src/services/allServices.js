import axios from "axios";
import config from "../config.json";

export const getData = async (setState) => {
  const { data } = await axios.get(config.apiEndPoint);

  setState(data.data);
};
