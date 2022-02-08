import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const NavigationBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1 }}
            data-cy="title"
          >
            Recipe Hub
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
