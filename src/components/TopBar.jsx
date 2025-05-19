import { useState } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import ReplayIcon from "@mui/icons-material/Replay";

export const TopBar = (props) => {
  const { score, setScore } = props;
  const onClickReplay = () => {
    setScore(0);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>Count Up Calculator</Typography>
        <IconButton
          onClick={onClickReplay}
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ marginLeft: "auto" }}
        >
          <ReplayIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
