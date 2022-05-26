import { ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "infra/NavBar";
import { AppRoutes } from "./infra/AppRoutes";
import { muiTheme, theme } from "./infra/theme";

export default function App() {
  return (
    <div style={{ backgroundColor: theme.colors.background }}>
      <ThemeProvider theme={muiTheme}>
        <Router>
          <NavBar />
          <AppRoutes />
        </Router>
      </ThemeProvider>
    </div>
  );
}
