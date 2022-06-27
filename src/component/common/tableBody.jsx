import React from "react";
import { formatter } from "../../services/allServices";
const TableBody = ({ data }) => {
  return (
    <>
      <tbody>
        {data &&
          data.map((data) => {
            return (
              <tr className="table-light" key={data.id}>
                <td>{data.rank}</td>
                <td>{data.name}</td>
                <td>{formatter.format(data.priceUsd)}</td>
                <td>{formatter.format(data.vwap24Hr)}</td>
                <td>
                  <div
                    className={
                      data.changePercent24Hr > 0
                        ? "changes__badge success"
                        : "changes__badge danger"
                    }
                  >
                    {data.changePercent24Hr[0] === "-"
                      ? `%${data.changePercent24Hr.slice(0, 5)}`
                      : `%${data.changePercent24Hr.slice(0, 4)}`}
                  </div>
                </td>
              </tr>
            );
          })}
      </tbody>
    </>
  );
};

export default TableBody;
