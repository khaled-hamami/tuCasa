import React from 'react'
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router'

function SignUpLink() {
   const navigate = useNavigate()
   return (
      <Box display="flex" gap="5px">
         <Typography color="secondary.main" ml="28px">
            Vous n'avez pas de compte ?
         </Typography>
         <Typography
            onClick={() => navigate('/signup')}
            sx={{
               color: 'info.main',
               textDecoration: 'underline',
               cursor: 'pointer',
               '&:hover': { color: 'info.dark' },
            }}
         >
            Inscrivez-vous
         </Typography>
      </Box>
   )
}

export default SignUpLink
