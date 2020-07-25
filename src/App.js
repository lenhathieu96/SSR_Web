import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { viVN } from "@material-ui/core/locale";
import { ToastContainer } from "react-toastify";
import MainRoute from "./Route";

import "./App.scss";

const theme = createMuiTheme(
  {
    palette: {
      primary: { main: "#283593" },
      secondary: { main: "#e78200" },
      tertiary: { main: "rgba(0, 0, 1, 0.151)" },
    },
    overrides: {
      MuiButton: {
        root: {
          borderRadius: 20,
          color: "gray",
          background: "white",
          outline: "none",
          boxShadow: "none",
        },
      },
    },
  },
  viVN
);
function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainRoute />
    </ThemeProvider>
  );
}

export default App;
