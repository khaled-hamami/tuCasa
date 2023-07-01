import './styles/App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Rentals from './pages/Rentals'
import Login from './pages/Login'
import Signup from './pages/Signup'
import About from './pages/About'
import Error from './pages/Error'
import { Box, ThemeProvider, createTheme } from '@mui/material'
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

   //set the theme as well as store it in localp storage
   const handleLightTheme = () => {
      setTheme(lightTheme)
      localStorage.setItem('Theme', 'lightTheme')
   }

   //set the theme as well as store it in localp storage
   const handleDarkTheme = () => {
      setTheme(darkTheme)
      localStorage.setItem('Theme', 'darkTheme')
   }

   // set the theme stored in  local storage as soon as the component fires up
   useEffect(() => {
      try {
         localStorage.getItem('Theme') === 'lightTheme' ? setTheme(lightTheme) : setTheme(darkTheme)
      } catch {
         null
      }
   }, [])

   return (
      <Box sx={{ height: '100%', backgroundColor: theme.palette.primary.main }}>
         <ThemeProvider theme={theme}>
            <Router>
               <Navbar
                  //theme button toogler
                  toogleButton={
                     <Box
                        onClick={() =>
                           theme === darkTheme ? handleLightTheme() : handleDarkTheme()
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
