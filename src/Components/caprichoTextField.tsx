// src/Components/capricho.tsx
import { TextField, styled } from '@mui/material';

const CaprichoTextField = styled(TextField)(({ theme }) => ({
  '& .MuiFilledInput-root': {
    border: '1px solid #ff33c4',
    borderRadius: '8px',
    backgroundColor: '#f5f5f5',
    transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      borderColor: '#ff99d6',
    },
    '&.Mui-focused': {
      borderColor: '#ff33c4',
      boxShadow: '0 0 0 2px rgba(255, 51, 196, 0.2)',
      backgroundColor: '#fff0fa',
    },
    '&::before, &::after': {
      display: 'none',
    },
  },
  '& .MuiFilledInput-input': {
    paddingTop: 24,
    paddingBottom: 8,
    paddingInline: 12,
    color: '#000',
  },
}));

export default CaprichoTextField;

