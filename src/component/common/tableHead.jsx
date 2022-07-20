import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const TableHead = ({ onSort, sortPath }) => {
  const sortIcon = (name) => {
    return sortPath[name] === "asc" ? <ExpandMoreIcon /> : <ExpandLessIcon />;
  };

  return (
    <>
      <thead>
        <tr className="table-dark">
          <th scope="col" onClick={() => onSort("market_cap_rank")}>
            <span>رتبه</span>
            <span>{sortIcon("market_cap_rank")}</span>
          </th>
          <th scope="col" onClick={() => onSort("name")}>
            <span>ارز دیجیتال</span>
            <span>{sortIcon("name")}</span>
          </th>
          <th scope="col">
            <span>لوگو</span>
          </th>
          <th scope="col" onClick={() => onSort("current_price")}>
            <span>قیمت</span>
            <span>{sortIcon("current_price")}</span>
          </th>
          <th onClick={() => onSort("price_change_percentage_24h")}>
            <span>تغییرات روزانه</span>
            <span>{sortIcon("price_change_percentage_24h")}</span>
          </th>
          <th className="default__cursor" />
        </tr>
      </thead>
    </>
  );
};

export default TableHead;
