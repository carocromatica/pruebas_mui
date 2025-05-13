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

  typography: {
  fontFamily: '"Cabin", sans-serif',
  intro: {
    
  fontFamily: '"Cabin", sans-serif',
    fontSize: '8rem',
    fontWeight: 400,
    color: '#444',
  },
}
});

export default theme;
