import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Navbar from './components/navbar/Navbar'
// import { lightTheme, darkTheme } from './components/UIsettings/ThemeToogler'
import { Box, ThemeProvider, createTheme } from '@mui/material'
import './styles/App.css'
import Rentals from './pages/Rentals'
import Login from './pages/Login'
import About from './pages/About'
import Error from './pages/Error'
import Signup from './pages/Signup'
import ThemeToogler from './components/UIsettings/ThemeToogler'

export const lightTheme = createTheme({
   palette: {
      background: '#FFF',
      mode: 'light',
      primary: {
         main: '#EDEDED',
         light: '#FFF',
         dark: '#E6E6E6',
      },
      secondary: {
         main: '#212121',
         light: '#3D3D3D',
         dark: '#000',
      },
   },
})

export const darkTheme = createTheme({
   palette: {
      background: '#000',
      mode: 'dark',
      primary: {
         main: '#212121',
         light: '#3D3D3D',
         dark: '#000',
      },
      secondary: {
         main: '#FAFAFA',
         light: '#FFF',
         dark: '#F0F0F0',
      },
   },
})

function App() {
   const [theme, setTheme] = useState(lightTheme)

   document.body.style.backgroundColor = theme.palette.primary.main

   return (
      <Box sx={{ height: '100%', backgroundColor: theme.palette.primary.main }}>
         <ThemeProvider theme={theme}>
            <Router>
               <Navbar
                  toogleButton={
                     <Box
                        onClick={() =>
                           theme === darkTheme ? setTheme(lightTheme) : setTheme(darkTheme)
                        }
                     >
                        <ThemeToogler />
                     </Box>
                  }
               />

               <Routes>
                  <Route path="/" Component={Home} />
                  <Route path="/rentals" Component={Rentals} />
                  <Route path="/login" Component={Login} />
                  <Route path="/signup" Component={Signup} />
                  <Route path="/about" Component={About} />
                  <Route path="/*" Component={Error} />
               </Routes>
            </Router>
         </ThemeProvider>
      </Box>
   )
}

export default App
