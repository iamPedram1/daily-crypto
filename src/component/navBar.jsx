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
            <div className="desktop__nav">
              <Grid container columnSpacing={2}>
                <Grid item>
                  <div className="nav__title">Daily Crypto</div>
                </Grid>
                <Grid item>
                  <div
                    style={{ borderRight: "1.5px solid #fff", height: "50px" }}
                  ></div>
                </Grid>
                <Grid item>
                  <div className="nav__title">
                    قیمت لحظه ای انواع ارز دیجیتال
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className="mobile__nav">
              <div>Daily Crypto</div>
              {/* <hr className="hr__line" /> */}
              <div
                style={{
                  borderTop: "1px solid #fff",
                }}
              ></div>
              <div>قیمت لحظه ای انواع ارز دیجیتال</div>
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
