import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Stack } from '@mui/material'
import styled from '@emotion/styled'

const CustomNavLink = styled(NavLink)(({ theme }) => ({
   fontSize: { xs: '4rempx', sm: '4rem' },
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
            connecter
         </CustomNavLink>
         <CustomNavLink to="/profile" style={location.pathname === '/profile' ? active : null}>
            Profile
         </CustomNavLink>
      </Stack>
   )
}

export default Links
