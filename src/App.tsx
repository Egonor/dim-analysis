import React, { useState } from "react";
//import logo from './logo.svg';
import "./App.css";
import Calculation from "./components/Calculation";

import {
  Box,
  Button,
  Fab,
  Paper,
  Stack,
  ThemeProvider,
  Typography,
  useTheme,
} from "@mui/material";
import { LightTheme, DarkTheme } from "./utils/Themes";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function App() {
  const [isDarkMode, setDarkMode] = useState(true);
  const theme = useTheme();

  const themeButtonStyle = {
    color: `${isDarkMode ? "#fff" : "#333"}`,
    backgroundColor: `${isDarkMode ? "black" : "white"}`,
    ":hover": {
      backgroundColor: `${isDarkMode ? "#333" : "#fff"}`,
      color: `${isDarkMode ? "#fff" : "#333"}`,
    },
    borderRadius: "100px",
  };

  const marginStyle = {
    display: "flex",
    backgroundColor: "gray",
    flex: 1,
  };

  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
          <Paper
            sx={{
              display: "flex",
              width: "100%",
              minHeight: "100vh",
              p: 3,
              justifyContent: "center", // Primary Axis
              alignItems: "stretch", // Secondary Axis
              bgcolor: "background.paper",
              color: "text.primary",
            }}
          >
            <Box
              id="app-content"
              sx={{
                display: "flex",
                backgroundColor: "background.paper",
                flexDirection: "column",
                flexBasis: "1000px",
                borderRadius: '25px 25px 0 0'
              }}
            >
              <Box
                id="top-bar"

                sx={{
                  display: "flex",
                  alignItems: "center",
                  //backgroundColor: 'palette.background.paper',
                  padding: '15px',
                  borderRadius: '25px 25px 0 0'
                }}
              >
                <Typography variant="h5" sx={{ marginRight: "auto" }}>
                  Dimensional Analysis
                </Typography>
                <Button
                  aria-label={"Change Theme"}
                  onClick={() => setDarkMode(!isDarkMode)}
                  sx={themeButtonStyle}
                >
                  {!isDarkMode && <LightModeIcon />}
                  {isDarkMode && <DarkModeIcon />}
                </Button>
              </Box>
              <Box
                id="calc-container"
                sx={{
                  display: "flex",
                  flexGrow: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Calculation />
              </Box>
              <Box id="picker-container" sx={{}}>
                <Typography sx={{ flexBasis: "200px", alignSelf: "flex-end" }}>
                  Unit picker
                </Typography>
              </Box>
            </Box>
          </Paper>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
