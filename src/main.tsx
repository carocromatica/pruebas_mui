import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './fonts.css'
import App from './App.tsx'
import theme from './theme.tsx';
import { ThemeProvider } from '@mui/material/styles';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
