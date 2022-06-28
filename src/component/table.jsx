import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
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
import TextfieldAndCheckbox from "./common/textfieldAndCheckbox";

const local = localStorage.getItem("favorite");
const store = local === null ? [] : JSON.parse(local);

const Table = () => {
  // State
  const [originalData, setOriginalData] = useState([]);
  const [favoriteData, setFavoriteData] = useState(
    localStorage.length > 0 ? store : []
  );
  const [showFavorite, setShowFavorite] = useState(false);
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
    getData(setOriginalData);
  }, []);

  // Event Handlers
  const handleFavorite = (crypto) => {
    const clone = [...favoriteData];
    if (clone.includes(crypto)) {
      const index = clone.indexOf(crypto);
      clone.splice(index, 1);
      setFavoriteData(clone);
      localStorage.setItem("favorite", JSON.stringify(clone));
      return;
    }
    clone.push(crypto);
    setFavoriteData(clone);
    localStorage.setItem("favorite", JSON.stringify(clone));
  };

  const handleSort = (column) => {
    const dataClone = showFavorite ? [...favoriteData] : [...originalData];
    const ascOrDesc = sortPath[column] === "asc" ? "desc" : "asc";
    // String or Integer
    const sorted =
      column === "name"
        ? _.orderBy(dataClone, column, ascOrDesc)
        : _.orderBy(dataClone, (o) => +o[column], ascOrDesc);

    setSortPath((data) => ({ ...data, [column]: ascOrDesc }));
    return showFavorite ? setFavoriteData(sorted) : setOriginalData(sorted);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  // Filter
  const dataToFilter = showFavorite ? favoriteData : originalData;
  const filteredData =
    search.length > 0
      ? dataToFilter.filter((item) =>
          item["name"].toLowerCase().includes(search.toLowerCase())
        )
      : dataToFilter;
  // Paginate
  const paginated = paginate(filteredData, currentPage, pageSize);
  return (
    <>
      {originalData.length === 0 && <Loading />}
      {originalData.length > 0 && (
        <>
          <Box sx={{ direction: "rtl", margin: "1rem 2rem" }}>
            <RightToLeft>
              <TextfieldAndCheckbox
                favorite={favoriteData}
                onChange={handleChange}
                onSetFavorite={setShowFavorite}
                search={search}
                onSetSearch={setSearch}
              />
              <div className="table-responsive">
                <table className="table">
                  <TableHead sortPath={sortPath} onSort={handleSort} />
                  <TableBody
                    data={paginated}
                    favorite={favoriteData}
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
            </RightToLeft>
          </Box>
        </>
      )}
    </>
  );
};

export default Table;
