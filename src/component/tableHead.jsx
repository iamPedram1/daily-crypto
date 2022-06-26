import React from "react";

const TableHead = ({ onSort }) => {
  return (
    <>
      <thead>
        <tr>
          <th style={{ cursor: "pointer" }} onClick={() => onSort("rank")}>
            رتبه
          </th>
          <th style={{ cursor: "pointer" }} onClick={() => onSort("name")}>
            نام
          </th>
          <th style={{ cursor: "pointer" }} onClick={() => onSort("priceUsd")}>
            قیمت
          </th>
          <th style={{ cursor: "pointer" }} onClick={() => onSort("vwap24Hr")}>
            میانگین وزنی قیمت سهم
            {/* <Tooltip>به زبان ساده، این اندیکاتور قیمت میانگین سهام را بر اساس سهم‌هایی که با قیمت‌های مختلف معامله شده‌اند، محاسبه می‌کند و معمولا در یک بازه زمانی یک روزه محاسبه می‌شود.</Tooltip> */}
          </th>

          <th
            style={{ cursor: "pointer" }}
            onClick={() => onSort("changePercent24Hr")}
          >
            ChangePer24
          </th>
        </tr>
      </thead>
    </>
  );
};

export default TableHead;
