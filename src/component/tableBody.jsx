import React from "react";

const TableBody = ({ myData }) => {
  return (
    <>
      <tbody>
        {myData &&
          myData.map((data) => {
            return (
              <tr className="table-light" key={data.id}>
                <td>{data.rank}</td>
                <td>{data.name}</td>
                <td>{data.priceUsd}</td>
                <td>{data.vwap24Hr}</td>
                <td>{data.changePercent24Hr}</td>
              </tr>
            );
          })}
      </tbody>
    </>
  );
};

export default TableBody;
