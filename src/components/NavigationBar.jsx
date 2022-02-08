import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  CssBaseline,
  Button
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          background: "#7a1e77",
          marginBottom: "20px",
          alignItems: "center"
        }}
      >
        <CssBaseline />
        <Toolbar>
          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1 }}
            data-cy="title"
            onClick={() => navigate("/")}
          >
            Recipe Hub
          </Typography>
          <Button
            color="inherit"
            data-cy="sign-up-btn"
            onClick={() => navigate("/registration-form")}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
