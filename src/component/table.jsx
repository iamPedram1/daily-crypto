import React, { useState, useEffect } from "react";
import _ from "lodash";
import TableHead from "./common/tableHead";
import TableBody from "./common/tableBody";
import { getData } from "../services/allServices";
import { TextField, Box } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const Table = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sortPath, setSortPath] = useState({
    rank: "asc",
    name: "asc",
    priceUsd: "asc",
    vwap24Hr: "asc",
    changePercent24Hr: "asc",
  });

  // Getting Data on Page Load
  useEffect(() => {
    getData(setData);
  }, []);

  const handleSort = (column) => {
    console.log(column);
    //Clone The State
    const dataClone = [...data];
    //
    const ascOrDesc = sortPath[column] === "asc" ? "desc" : "asc";
    // It's String or Number
    const sorted =
      column === "name"
        ? _.orderBy(dataClone, column, ascOrDesc)
        : _.orderBy(dataClone, (o) => +o[column], ascOrDesc);

    // Update The State
    setSortPath((data) => ({ ...data, [column]: ascOrDesc }));
    setData(sorted);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredData =
    search.length > 0
      ? data.filter((item) =>
          item["name"].toLowerCase().includes(search.toLowerCase())
        )
      : data;

  return (
    <>
      <Box sx={{ margin: "1rem", direction: "rtl" }}>
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <div dir="rtl">
              <TextField
                value={search}
                sx={{ width: "100%" }}
                onChange={handleChange}
                label="جستجوی ارز"
                variant="outlined"
              />
            </div>
          </ThemeProvider>
        </CacheProvider>
        <div className="table-responsive">
          <table className="table">
            <TableHead sortPath={sortPath} onSort={handleSort} />
            <TableBody data={filteredData} />
          </table>
        </div>
      </Box>
    </>
  );
};

export default Table;
