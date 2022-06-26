import axios from "axios";
import config from "../config.json";

export const getData = async (setState) => {
  const { data } = await axios.get(config.apiEndPoint);

  setState(data.data);
};

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
