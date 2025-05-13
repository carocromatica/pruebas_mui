import { useState } from "react";
import {
  Box,
  OutlinedInput,
  FormLabel,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";


export default function CampoPersonalizado() {
  const [valor, setValor] = useState("");

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <FormLabel>Label</FormLabel>

      <OutlinedInput
      sx={{
  color: "#000", // fuerza texto visible
  input: {
    color: "#000", // a veces necesario también aquí
  },
}}
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder="Ingresar nombre"
        fullWidth
        autoFocus
        startAdornment={
          <InputAdornment position="start">
           
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end">
             
            </IconButton>
          </InputAdornment>
        }
      />

      <FormHelperText>Helper text</FormHelperText>
    </Box>
  );
}
