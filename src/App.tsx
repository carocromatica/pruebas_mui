import { Container, Typography, Button } from '@mui/material';
import Formulario from './Components/Formulario';
import Formulario2 from './Components/formulario2';


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

      <Typography variant="intro">Bienvenida Carolina</Typography>

      <Typography variant="intro">Resumen del módulo 3</Typography>

      <Typography className="body-secundario">Este texto es parte de un cuerpo complementario.</Typography>

      <Typography className="etiqueta">Estado</Typography>

         <Formulario2 />
    </Container>


  );
}

export default App;
