import { Stack } from '@mui/material'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styled from '@emotion/styled'

const CustomNavLink = styled(NavLink)(({ theme }) => ({
   fontSize: { xs: '1rem', sm: '1.2rem' },
   fontWeight: 'bold',
   textDecoration: 'none',
   color: theme.palette.secondary.main,
   position: 'relative',
   display: 'inline-block',
   overflow: 'hidden',

   '&::after': {
      content: '""',
      position: 'absolute',
      left: '50%',
      bottom: '0',
      width: '0',
      height: '2px',
      backgroundColor: theme.palette.info.main,
      transform: 'translateX(-50%)',
      transition: 'width 0.3s',
   },

   '&:hover::after': {
      width: '100%',
   },
}))

const active = { color: '#0288d1' }

function Links() {
   const location = useLocation()
   return (
      <Stack direction="row" spacing={2} display="flex" justifyContent="space-evenly">
         <CustomNavLink to="/" style={location.pathname === '/' ? active : null}>
            Accueil
         </CustomNavLink>
         <CustomNavLink to="/rentals" style={location.pathname === '/rentals' ? active : null}>
            Locations
         </CustomNavLink>
         <CustomNavLink to="/login" style={location.pathname === '/login' ? active : null}>
            Se connecter
         </CustomNavLink>
         <CustomNavLink to="/about" style={location.pathname === '/about' ? active : null}>
            à Propos
         </CustomNavLink>
      </Stack>
   )
}

export default Links
