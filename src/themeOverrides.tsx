import type { Components, Theme } from "@mui/material/styles";

const themeOverrides: Components<Omit<Theme, "components">> = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 999,
        textTransform: "none",
        paddingInline: 24,
        paddingBlock: 10,
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          backgroundColor: "#ff33c4",
          boxShadow: "0 0 8px rgba(255, 51, 196, 0.3)",
        },
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

  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        backgroundColor: "#f5f5f5",
        transition: "background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
        "& .MuiOutlinedInput-notchedOutline": {
          transition: "border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        },
        "&.Mui-focused": {
          backgroundColor: "#fff0fa",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#ff33c4",
          boxShadow: "0 0 0 2px rgba(255, 51, 196, 0.2)",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#ff99d6",
          boxShadow: "0 0 0 2px rgba(255, 153, 214, 0.15)",
        },
      },
      input: {
        padding: "12px",
        color: "#000",
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        backgroundColor: "#f5f5f5",
        "&:hover": {
          backgroundColor: "#fff0fa",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#ff33c4",
          boxShadow: "0 0 0 2px rgba(255, 51, 196, 0.2)",
        },
      },
    },
  },
};

export default themeOverrides;
