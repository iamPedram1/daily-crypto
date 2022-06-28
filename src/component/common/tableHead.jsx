import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Fade } from "@mui/material";
import { Tooltip, ConfigProvider } from "antd";
import HelpIcon from "@mui/icons-material/Help";

const TableHead = ({ onSort, sortPath }) => {
  const sortIcon = (name) => {
    return sortPath[name] === "asc" ? <ExpandMoreIcon /> : <ExpandLessIcon />;
  };

  return (
    <>
      <thead>
        <tr className="table-dark">
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
            <ConfigProvider direction="rtl">
              <Tooltip
                title="به زبان ساده، این اندیکاتور قیمت سهام را بر اساس سهم‌هایی که با میانگین قیمت‌های مختلف معامله شده‌اند، محاسبه می‌کند و معمولا در یک بازه زمانی یک روزه محاسبه می‌شود"
                placement="top"
                color="blue"
              >
                <span>
                  <HelpIcon color="primary" />
                </span>
              </Tooltip>
            </ConfigProvider>
            <span>
              <span>میانگین وزنی قیمت سهم</span>
              <span>{sortIcon("vwap24Hr")}</span>
            </span>
          </th>

          <th onClick={() => onSort("changePercent24Hr")}>
            <span>تغییرات روزانه</span>
            <span>{sortIcon("changePercent24Hr")}</span>
          </th>
          <th />
        </tr>
      </thead>
    </>
  );
};

export default TableHead;
