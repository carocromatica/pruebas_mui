import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '999px',
          backgroundColor:'red',
        },
      },
    },
  },
});

export default theme;
