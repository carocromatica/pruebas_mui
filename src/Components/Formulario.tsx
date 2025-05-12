import {
  Box,
  FormLabel,
  OutlinedInput,
  FormHelperText,
  InputAdornment,
  IconButton,
} from "@mui/material";


export default function CampoPersonalizado() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <FormLabel>Label</FormLabel>

      <OutlinedInput
        autoFocus
        fullWidth
        placeholder="Ingresar nombre"
        sx={{
    borderRadius: 2,
    backgroundColor: "#f5f5f5",
    "& .MuiOutlinedInput-notchedOutline": {
      transition: "border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "primary.main",
      boxShadow: "0 0 0 2px rgba(105, 79, 185, 0.2)",
    },
  }}
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
