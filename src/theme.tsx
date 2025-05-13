import { createTheme } from "@mui/material/styles";
import themeOverrides from "./themeOverrides";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff33c4",
    },
    secondary: {
      main: "#ff99d6",
    },
  },
  components: themeOverrides,
});

export default theme;
