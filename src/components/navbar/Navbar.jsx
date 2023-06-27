import React from 'react'
import { Box, IconButton } from '@mui/material'
import { createTheme } from '@mui/material'
import Logo from './Logo'
import Links from './Links'
import LoginButton from './LoginButton'
import Search from './Search'

export const lightTheme = createTheme({
   palette: {
      mode: 'light',
      primary: {
         main: '#FAFAFA',
         light: '#FFF',
         dark: '#F0F0F0',
      },
      secondary: {
         main: '#3C3C3C',
         light: '#3D3D3D',
         dark: '#000',
      },
   },
})

export const darkTheme = createTheme({
   palette: {
      mode: 'dark',
      primary: {
         main: '#3C3C3C',
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

function Navbar({ theme, setTheme }) {
   const handleTheme = (theme, setTheme) => {
      theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme)
   }
   return (
      <Box position="sticky" top="0">
         <Box
            sx={{
               display: 'flex',
               gap: '15px',
               alignItems: 'center',
               justifyContent: 'center',
               position: 'sticky',
               top: '0',
               width: '100%',
               height: 'auto',
               bgcolor: 'primary.dark',
               p: '.7rem 0',
            }}
         >
            <Box flex="2">
               <Logo />
            </Box>

            <Box flex="3" sx={{ display: { xs: 'none', md: 'block' } }}>
               <Links />
            </Box>

            <Box flex="3" sx={{ display: { xs: 'none', sm: 'block' } }}>
               <Search />
            </Box>

            <Box flex="1">
               <LoginButton />
            </Box>

            {/* < onClick={() => handleTheme(theme, setTheme)}> */}
         </Box>
         <Box sx={{ display: { xs: 'flex', sm: 'none' }, pt: '0' }}>
            <Search />
         </Box>
         <Box
            sx={{
               display: { sx: 'flex', md: 'none' },
               backgroundColor: 'primary.dark',
               p: '15px 0',
            }}
         >
            <Links />
         </Box>
      </Box>
   )
}

export default Navbar
