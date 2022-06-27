import React from "react";
import { Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <Grid
          sx={{ padding: "1rem" }}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <div style={{ color: "white" }}>
              Daily Crypto | قیمت لحظه ای انواع ارز دیجیتال
            </div>
          </Grid>
          <Grid item sx={{ color: "white" }}>
            <GitHubIcon sx={{ color: "white", fontSize: "50px" }} />
            <span>| By Pedi</span>
          </Grid>
        </Grid>
      </nav>
    </>
  );
};

export default NavBar;
