import React from 'react'
import { Box, Typography } from '@mui/material'

function ForgotYourPassword() {
   return (
      <Box display="flex" gap="5px">
         <Typography
            color="secondary.main"
            ml="28px"
            onClick={() => alert('Apologies , this is feature still in developement')}
            sx={{
               color: 'info.main',
               textDecoration: 'underline',
               cursor: 'pointer',
               '&:hover': { color: 'info.dark' },
            }}
         >
            Mot de passe oublié ?
         </Typography>
      </Box>
   )
}

export default ForgotYourPassword
