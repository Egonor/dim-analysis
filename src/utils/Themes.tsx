import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
    palette: {
        mode: 'light',
        // background: {
        //     default: '#B7C2F0',
        //     paper: '#4358B0',
        // }
    }
});

export const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            paper: '#333',
        }
    }
});

