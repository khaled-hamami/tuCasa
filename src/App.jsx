import { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router'
import { Box, ThemeProvider, createTheme } from '@mui/material'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Rentals from './pages/Rentals'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Error from './pages/Error'
import ThemeToogler from './components/UIsettings/ThemeToogler'
import { atom, useAtom } from 'jotai'
import ExpandedPost from './components/Posts/ExpandedPost'
import './styles/App.css'

// GLOBAL STATES
export const GlobalUserInfo = atom(null)
export const LoggedIn = atom(localStorage.getItem('isLoggedIn') || false)

/*********************************************   THEMES    ***************************************** */

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

/*********************************************   APP COMPONENT    ***************************************** */
function App() {
   //theme states
   const [theme, setTheme] = useState(lightTheme)

   //login Global State
   const [isLoggedIn, setIsLoggedIn] = useAtom(LoggedIn)
   //set state on page load and set it to false if there is no indicator in local storage
   useEffect(() => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') || false)
   }, [])

   //set the background color for the whole project using theme  (its dynamic background color  thats why css wasnt used)
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

   /**********************************************   JSX   *******************************************/

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
                  <Route path="/" element={<Home />} />
                  <Route path="/rentals" element={<Rentals />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/posts/:PostId" element={<ExpandedPost />} />
                  <Route path="/*" element={<Error />} />
               </Routes>
            </Router>
         </ThemeProvider>
      </Box>
   )
}

export default App
