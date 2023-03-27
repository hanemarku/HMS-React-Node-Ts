import { createTheme, ThemeOptions} from "@mui/material";

const arcNude = "#EEE0CB";
export const customTheme: ThemeOptions = createTheme({
    palette:{
        mode: "light",
        primary: {
            light: 'rgba(66,165,245)',
            main: 'rgba(25,118,210)',
            dark: 'rgba(21,101,192)',
        },
        background: {
            paper: 'rgba(155,205,5)',
            default: 'rgba(255,255,255)'
        },
        secondary: {
            main: arcNude
        }
    },
    typography: {
        h3: {
            fontWeight: 300,
        }
    }
});

