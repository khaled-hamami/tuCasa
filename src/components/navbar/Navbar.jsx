import React from 'react'
import { Box } from '@mui/material'
import Logo from './Logo'
import Links from './Links'
import LoginButton from './LoginButton'
import Search from './Search'
import { useNavigate } from 'react-router'

function Navbar({ toogleButton }) {
   const navigate = useNavigate()
   return (
      <Box position="sticky" top="0" zIndex="13" border="solid rgba(0,0,0,.2) 1px">
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
            <Box flex="2.4">
               <Logo />
            </Box>
            <Box sx={{ flex: '6.2', display: { xs: 'none', md: 'block' } }}>
               <Links />
            </Box>
            <Box flex="3" sx={{ display: { xs: 'none', sm: 'block' } }}>
               <Search />
            </Box>
            <Box flex=".5">{toogleButton}</Box>
            <Box flex="1" onClick={() => navigate('/login')}>
               <LoginButton content="connexion" />
            </Box>
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
