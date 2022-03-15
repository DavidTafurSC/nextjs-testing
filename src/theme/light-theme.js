import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

import { baseTheme } from "./base-theme";

export const lightTheme = createTheme(baseTheme, {
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});
