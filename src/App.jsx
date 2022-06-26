import React, { useState, useEffect } from "react";
import _, { orderBy } from "lodash";
import TableHead from "./component/tableHead";
import TableBody from "./component/tableBody";
import { getData } from "./services/allServices";

const App = () => {
  const [myData, setMyData] = useState([]);
  const [sortPath, setSortPath] = useState({
    rank: "asc",
    name: "asc",
    priceUsd: "asc",
    vwap24Hr: "asc",
    changePercent24Hr: "asc",
  });

  useEffect(() => {
    getData(setMyData);
  }, []);

  const handleSort = (column) => {
    //Clone The State
    const dataClone = [...myData];
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
    setMyData(sorted);
  };

  return (
    <>
      <table className="table">
        <TableHead onSort={handleSort} />
        <TableBody myData={myData} />
      </table>
    </>
  );
};

export default App;
