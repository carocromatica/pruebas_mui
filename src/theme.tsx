import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '999px',
          backgroundColor:'green',
        },
      },
    },
    MuiOutlinedInput: {
  styleOverrides: {
    root: {
      borderRadius: 12,
      backgroundColor: '#f5f5f5',
      paddingRight: 4,
    },
    input: {
      padding: '12px',
    },
  },
},
MuiInputLabel: {
  styleOverrides: {
    root: {
      fontSize: '12px',
      padding:'8px'
    },
  },
},
MuiFormHelperText: {
  styleOverrides: {
    root: {
      fontSize: '0.75rem',
    },
  },
},

  },
});

export default theme;
