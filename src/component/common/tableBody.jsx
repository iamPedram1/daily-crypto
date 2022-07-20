import React from "react";
import { IconButton } from "@mui/material";
import { RemoveDecimal } from "../../services/allServices";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
const TableBody = ({ data, favorite, onFavorite }) => {
  const retuner = (number) => {
    const toStr = number.toString();
    if (toStr[0] === "-") {
      return toStr.slice(0, 5);
    } else {
      return toStr.slice(0, 4);
    }
  };

  return (
    <>
      <tbody>
        {data &&
          data.map((data) => {
            return (
              <tr className="table-light" key={data.id}>
                <td>{data.market_cap_rank}</td>
                <td>{data.name}</td>
                <td>
                  <img
                    src={data.image}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "contain",
                    }}
                  />
                </td>
                <td>{RemoveDecimal(data.current_price)}</td>
                <td>
                  <div
                    className={
                      data.price_change_percentage_24h > 0
                        ? "changes__badge success"
                        : "changes__badge danger"
                    }
                  >
                    {data.price_change_percentage_24h[0] === "-"
                      ? `${retuner(data.price_change_percentage_24h)}%`
                      : `${retuner(data.price_change_percentage_24h)}%`}
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
