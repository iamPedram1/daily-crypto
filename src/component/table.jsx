import React, { useState, useEffect } from "react";
import _ from "lodash";
import TableHead from "./common/tableHead";
import TableBody from "./common/tableBody";
import { getData } from "../services/allServices";
const Table = () => {
  const [data, setData] = useState([]);
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
    //Clone The State
    const dataClone = [...data];
    //
    const ascOrDesc = sortPath[column] === "asc" ? "desc" : "asc";
    // Sort
    // Is Number Or String
    const sorted =
      column === "name"
        ? _.orderBy(dataClone, column, ascOrDesc)
        : _.orderBy(dataClone, (o) => +o[column], ascOrDesc);

    // Update The State
    setSortPath((data) => ({ ...data, [column]: ascOrDesc }));
    setData(sorted);
  };

  return (
    <>
      <table className="table" style={{ margin: "10rem !important" }}>
        <TableHead sortPath={sortPath} onSort={handleSort} />
        <TableBody data={data} />
      </table>
    </>
  );
};

export default Table;
