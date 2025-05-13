import { TextField, MenuItem, Box } from "@mui/material";
import CaprichoTextField from '../Components/caprichoTextField';

export default function FormularioFlotante() {
  return (
    <Box sx={{ maxWidth: 400, mx: "auto", display: "grid", gap: 3 }}>
      {/* Input */}
      <TextField
        fullWidth
        id="nombre"
        label="Nombre"
        variant="filled"
      />

      {/* Textarea */}
      <TextField
        fullWidth
        id="mensaje"
        label="Mensaje"
        variant="filled"
        multiline
        rows={4}
     
      />

      {/* Select */}
      <TextField
      variant="filled"
        fullWidth
        id="opcion"
        select
        label="Selecciona una opción"
        defaultValue=""
      >
        <MenuItem value="uno">Opción Uno</MenuItem>
        <MenuItem value="dos">Opción Dos</MenuItem>
        <MenuItem value="tres">Opción Tres</MenuItem>
      </TextField>


      <CaprichoTextField
  label="Nombre"
  variant="filled"
  fullWidth

/>
    </Box>
  );
}
