import React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import _ from "lodash";
const Pagination = ({ data, pageSize, onPageChange, currentPage }) => {
  const pageNumber = Math.ceil(data.length / pageSize);
  if (pageNumber === 1) return null;
  const page = _.range(1, pageNumber + 1);
  return (
    <>
      <Box sx={{ direction: "ltr" }}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <ul className="pagination">
              {page.map((page) => {
                return (
                  <>
                    <li
                      className={
                        currentPage === page ? "page-item active" : "page-item"
                      }
                    >
                      <a
                        onClick={() => onPageChange(page)}
                        className="page-link"
                      >
                        {page}
                      </a>
                    </li>
                  </>
                );
              })}
            </ul>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Pagination;
