import React from 'react'
import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function LoginButton({ width }) {
   const navigate = useNavigate()

   const handleLogin = () => {
      JSON.stringify(localStorage.getItem('TOKEN', 'TokenId')) === 'TokenId'
         ? navigate('/user')
         : navigate('/login')
   }

   return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
         <Button
            onClick={handleLogin}
            variant="contained"
            sx={{
               width: { width },
               p: '.5rem 1.5rem',
               fontWeight: 'bold',
               backgroundColor: 'secondary.dark',
               color: 'primary.light',
               '&:hover': {
                  backgroundColor: 'primary.light',
                  color: 'info.main',
               },
            }}
         >
            Login
         </Button>
      </Box>
   )
}

export default LoginButton
