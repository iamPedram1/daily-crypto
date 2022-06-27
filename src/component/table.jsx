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
import TableBodys from "./common/tableBody";

const Table = () => {
  // State
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sortPath, setSortPath] = useState({
    rank: "asc",
    name: "asc",
    priceUsd: "asc",
    vwap24Hr: "asc",
    changePercent24Hr: "asc",
  });

  // Component Did Mount
  useEffect(() => {
    getData(setData);
  }, []);

  // Event Handlers
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSort = (column) => {
    const dataClone = [...data];
    const ascOrDesc = sortPath[column] === "asc" ? "desc" : "asc";
    // String or Num
    const sorted =
      column === "name"
        ? _.orderBy(dataClone, column, ascOrDesc)
        : _.orderBy(dataClone, (o) => +o[column], ascOrDesc);

    setSortPath((data) => ({ ...data, [column]: ascOrDesc }));
    setData(sorted);
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
      <Box sx={{ direction: "rtl" }}>
        <RightToLeft>
          <TextField
            value={search}
            sx={{ width: "100%" }}
            onChange={(e) => handleChange(e, setSearch)}
            label="جستجوی ارز"
            variant="outlined"
          />
        </RightToLeft>
        <div className="table-responsive">
          <table className="table">
            <TableHead sortPath={sortPath} onSort={handleSort} />
            <TableBodys data={pagination} />
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
  );
};

export default Table;
