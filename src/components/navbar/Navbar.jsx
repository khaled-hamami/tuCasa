import React from 'react'
import { Box } from '@mui/material'
import { createTheme } from '@mui/material'
import Logo from './Logo'
import Links from './Links'
import LoginButton from './LoginButton'
import Search from './Search'

import { purple ,red } from '@mui/material/colors'
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

function Navbar({ theme, setTheme }) {
   const handleTheme = (theme, setTheme) => {
      theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme)
   }
   return (
      <Box position="sticky" top="0" zIndex="1" border="solid rgba(0,0,0,.2) 1px">
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
