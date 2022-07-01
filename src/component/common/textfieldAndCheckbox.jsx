import React from "react";
import {
  TextField,
  Box,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Tooltip, ConfigProvider } from "antd";

const TextfieldAndCheckbox = ({
  onChange,
  onSetFavorite,
  search,
  onSetSearch,
  favorite,
  onSetPage,
}) => {
  return (
    <>
      <Grid container alignItems="center">
        <Grid item xs={22} sm={22} md={5}>
          <TextField
            value={search}
            sx={{ width: "100%", margin: "1rem 0" }}
            onChange={(e) => onChange(e, onSetSearch)}
            prefix={<SearchIcon />}
            label={<SearchIcon />}
            placeholder="جستجوی ارز"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          {favorite.length === 0 ? (
            <ConfigProvider direction="rtl">
              <Tooltip
                trigger={["click", "hover", "focus", "contextMenu"]}
                title="لیست ارز های مورد علاقه شما خالی است"
                placement="top"
                color="red"
              >
                <div>
                  <FormGroup className="checkbox">
                    <FormControlLabel
                      label="فقط ارز های مورد علاقه من را نمایش بده"
                      onChange={(e, value) => {
                        onSetFavorite(value);
                        onSetPage(1);
                      }}
                      control={<Checkbox />}
                      disabled={favorite.length === 0}
                    />
                  </FormGroup>
                </div>
              </Tooltip>
            </ConfigProvider>
          ) : (
            <FormGroup className="checkbox">
              <FormControlLabel
                label="فقط ارز های مورد علاقه من را نمایش بده"
                onChange={(e, value) => {
                  onSetFavorite(value);
                  onSetPage(1);
                }}
                control={<Checkbox />}
                disabled={favorite.length === 0}
              />
            </FormGroup>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default TextfieldAndCheckbox;
