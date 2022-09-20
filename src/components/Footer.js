import * as React from "react";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export const Footer = () => {
  return (
    <React.Fragment>
      <br />
      <Divider variant="middle" />
      <br />
      <Typography textAlign="center" gutterBottom variant="body1">
        © 2022 Copyright Fei Wu
      </Typography>
      <br />
    </React.Fragment>
  );
};
