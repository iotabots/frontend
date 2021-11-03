import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from "react-router-dom";

import Navigation from './components/Navigation'
import Footer from './components/Footer'

import Home from './pages/Home'
import Bots from './pages/Bots'

import './App.css';

export default function App() {

  const theme = createTheme({
    typography: {
      fontFamily: 'coder',
    },
    palette: {
    primary: {
      light: '#757ce8',
      main: '#2b2b2b',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  });

  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="bots" element={<Bots />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

