import React from "react";
import { Grid, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

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
              <Grid container columnSpacing={2} alignItems="center">
                <Grid item>
                  <div className="nav__title">
                    <span>Daily Crypto</span>
                    <span>
                      <Logo />
                    </span>
                  </div>
                </Grid>
                <Grid item>
                  <div
                    style={{ borderRight: "1.5px solid #fff", height: "60px" }}
                  ></div>
                </Grid>
                <Grid item>
                  <Typography className="nav__title">
                    قیمت لحظه ای انواع ارز دیجیتال
                  </Typography>
                </Grid>
              </Grid>
            </div>
            <div className="mobile__nav">
              <div>
                <span className="nav__title">Daily Crypto</span>
                <span>
                  <Logo />
                </span>
              </div>
              <div
                style={{
                  borderTop: "1px solid #fff",
                  margin: "0.5rem 0",
                }}
              ></div>
              <Typography>قیمت لحظه ای انواع ارز دیجیتال</Typography>
            </div>
          </Grid>
          <Grid item sx={{ color: "white" }}>
            <Grid container columnSpacing={0.5} alignItems="center">
              <Grid item>
                <a
                  href="https://github.com/iamPedram1/daily-crypto"
                  target="_blank"
                  className="github__icon"
                >
                  <GitHubIcon sx={{ fontSize: "70px" }} />
                </a>
              </Grid>
              <Grid item>
                <div
                  style={{
                    borderLeft: "1px solid white",
                    height: "70px",
                  }}
                ></div>
              </Grid>
              <Grid item>
                <Typography>By Pedi</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </nav>
    </>
  );
};

export default NavBar;

const Logo = () => {
  return (
    <CurrencyExchangeIcon
      sx={{
        fontSize: "3rem",
        color: "#EF8E19",
        margin: "0 10px",
      }}
    />
  );
};
