import { Container, Typography, Button } from '@mui/material';
import Formulario from './Components/Formulario';


function App() {
  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        ¡Hola, Carolina!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Este es tu proyecto con Vite + React + TypeScript + MUI funcionando 🚀
      </Typography>
      <Button variant="contained" color="primary">
        holiss
      </Button>
      <Formulario />
    </Container>

  
  );
}

export default App;
