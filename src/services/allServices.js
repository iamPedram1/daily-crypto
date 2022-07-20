import axios from "axios";
import config from "../config.json";
import _ from "lodash";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { toast } from "react-toastify";
const theme = createTheme({
  direction: "rtl",
});
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
// Getting Data From the Server

export const getData = async (setState) => {
  try {
    const { data } = await axios.get(config.apiEndPoint);
    setState(data);
  } catch (ex) {
    if (ex.code == "ERR_NETWORK") {
      const message = (
        <span>
          !خطا در برقراری ارتباط با سرور <br />
          لطفا فیلترشکن خود را روشن کنید
        </span>
      );
      toast.error(message);
    }
  }
};

// Working with Money

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const RemoveDecimal = (number) => {
  const price = formatter.format(number);
  const index = price.indexOf(".");
  if (number > 0 && number < 10) {
    return price;
  }
  return price.slice(0, index);
};

// Input Event Handler

export const handleChange = (e, setState) => {
  setState(e.target.value);
};

// Paginate

export const paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
};

// Right To Left

export const RightToLeft = (props) => {
  return (
    <>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <div dir="rtl">{props.children}</div>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};
