import React from "react";
import { IconButton } from "@mui/material";
import { RemoveDecimal } from "../../services/allServices";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
const TableBody = ({ data, favorite, onFavorite }) => {
  return (
    <>
      <tbody>
        {data &&
          data.map((data) => {
            return (
              <tr className="table-light" key={data.id}>
                <td>{data.rank}</td>
                <td>{data.name}</td>
                <td>{RemoveDecimal(data.priceUsd)}</td>
                <td>{RemoveDecimal(data.vwap24Hr)}</td>
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
                <td>
                  {favorite.includes(data) ? (
                    <>
                      <IconButton onClick={() => onFavorite(data)}>
                        <StarOutlinedIcon
                          className="star"
                          sx={{ color: "#FFA500" }}
                        />
                      </IconButton>
                    </>
                  ) : (
                    <>
                      <IconButton onClick={() => onFavorite(data)}>
                        <StarOutlineOutlinedIcon className="star" />
                      </IconButton>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
      </tbody>
    </>
  );
};

export default TableBody;
