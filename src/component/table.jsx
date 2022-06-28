import React, { useState, useEffect } from "react";
import { TextField, Box } from "@mui/material";
import {
  getData,
  handleChange,
  paginate,
  RightToLeft,
} from "../services/allServices";
import _ from "lodash";
import Pagination from "./pagination";
import TableHead from "./common/tableHead";
import TableBody from "./common/tableBody";
import Loading from "./common/loading";

const Table = () => {
  // State
  const [data, setData] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sortPath, setSortPath] = useState({
    rank: "asc",
    name: "asc",
    priceUsd: "asc",
    vwap24Hr: "asc",
    changePercent24Hr: "asc",
  });
  const pageSize = 20;
  // Component Did Mount
  useEffect(() => {
    getData(setData);
  }, []);

  // Event Handlers
  const handleFavorite = (crypto) => {
    const clone = [...favorite];
    if (clone.includes(crypto)) {
      const index = clone.indexOf(crypto);
      clone.splice(index, 1);
      return setFavorite(clone);
    }
    clone.push(crypto);
    setFavorite(clone);
  };

  const handleSort = (column) => {
    const dataClone = [...data];
    const ascOrDesc = sortPath[column] === "asc" ? "desc" : "asc";
    // String or Integer
    const sorted =
      column === "name"
        ? _.orderBy(dataClone, column, ascOrDesc)
        : _.orderBy(dataClone, (o) => +o[column], ascOrDesc);

    setSortPath((data) => ({ ...data, [column]: ascOrDesc }));
    setData(sorted);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Filter
  const filteredData =
    search.length > 0
      ? data.filter((item) =>
          item["name"].toLowerCase().includes(search.toLowerCase())
        )
      : data;
  // Paginate
  const pagination = paginate(filteredData, currentPage, pageSize);
  return (
    <>
      {data.length === 0 && <Loading />}
      {data.length > 0 && (
        <>
          <Box sx={{ direction: "rtl", margin: "1rem 2rem" }}>
            <RightToLeft>
              <TextField
                value={search}
                sx={{ width: "100%", margin: "1rem 0" }}
                onChange={(e) => handleChange(e, setSearch)}
                label="جستجوی ارز"
                variant="outlined"
              />
            </RightToLeft>
            <div className="table-responsive">
              <table className="table">
                <TableHead sortPath={sortPath} onSort={handleSort} />
                <TableBody
                  data={pagination}
                  favorite={favorite}
                  onFavorite={handleFavorite}
                />
              </table>
            </div>
            <Pagination
              onPageChange={handlePageChange}
              data={filteredData}
              currentPage={currentPage}
              pageSize={pageSize}
            />
          </Box>
        </>
      )}
    </>
  );
};

export default Table;
