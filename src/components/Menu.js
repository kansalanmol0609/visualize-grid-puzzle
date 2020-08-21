import React from "react";

import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

export const Menu = () => (
  <AppBar position="static">
    <Toolbar variant="dense">
      <Typography variant="h6" color="inherit">
        Grid Problem
      </Typography>
    </Toolbar>
  </AppBar>
);
