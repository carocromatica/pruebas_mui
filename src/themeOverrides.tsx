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

  MuiTypography: {
    styleOverrides: {
      root: {
        // 🟣 Título destacado grande
        '&.h1-destacado': {
          fontSize: '2.75rem',
          fontWeight: 700,
          color: '#ff33c4',
          lineHeight: 1.2,
        },
        // ⚫ Título resumen de sección
        '&.resumen-modulo': {
          fontSize: '1.5rem',
          fontWeight: 600,
          color: '#555',
          fontStyle: 'italic',
          lineHeight: 1.4,
        },
        // 🟡 Texto secundario
        '&.body-secundario': {
          fontSize: '0.95rem',
          fontWeight: 400,
          color: '#666',
          lineHeight: 1.6,
        },
        // 🟢 Etiqueta pequeña
        '&.etiqueta': {
          fontSize: '0.75rem',
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: '#999',
        },
      },
    },
  },






};

export default themeOverrides;
