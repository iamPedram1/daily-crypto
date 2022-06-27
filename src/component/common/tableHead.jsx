import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Tooltip } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";

const TableHead = ({ onSort, sortPath }) => {
  const sortIcon = (name) => {
    return sortPath[name] === "asc" ? <ExpandMoreIcon /> : <ExpandLessIcon />;
  };

  return (
    <>
      <thead>
        <tr>
          <th scope="col" onClick={() => onSort("rank")}>
            <span>رتبه</span>
            <span>{sortIcon("rank")}</span>
          </th>
          <th scope="col" onClick={() => onSort("name")}>
            <span>ارز دیجیتال</span>
            <span>{sortIcon("name")}</span>
          </th>
          <th scope="col" onClick={() => onSort("priceUsd")}>
            <span>قیمت</span>
            <span>{sortIcon("priceUsd")}</span>
          </th>
          <th scope="col" onClick={() => onSort("vwap24Hr")}>
            <Tooltip
              title="            به زبان ساده، این اندیکاتور قیمت میانگین سهام را بر اساس سهم‌هایی که با قیمت‌های مختلف معامله شده‌اند، محاسبه می‌کند و معمولا در یک بازه زمانی یک روزه محاسبه می‌شود
              "
              disableFocusListener
              placement="top-start"
              arrow
            >
              <span>
                <HelpIcon color="primary" />
              </span>
            </Tooltip>
            <span>
              میانگین وزنی قیمت سهم
              <span>{sortIcon("vwap24Hr")}</span>
            </span>
          </th>

          <th onClick={() => onSort("changePercent24Hr")}>
            <span>تغییرات روزانه</span>
            <span>{sortIcon("changePercent24Hr")}</span>
          </th>
        </tr>
      </thead>
    </>
  );
};

export default TableHead;
