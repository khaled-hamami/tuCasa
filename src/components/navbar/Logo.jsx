import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { Home } from '@mui/icons-material'

function Logo() {
   return (
      <Box
         sx={{
            display: 'flex',
            justifyContent: { sx: 'left', sm: 'center' },
            alignItems: 'center',
         }}
      >
         <IconButton sx={{ color: 'secondary.main' }}>
            <Home sx={{ fontSize: '2rem' }} />
         </IconButton>
         <Typography
            variant="h4"
            sx={{
               fontWeight: 'bold',
               color: 'secondary.dark',
               fontSize: { xs: '1.5rem', sm: '2rem' },
            }}
         >
            tu Casa
         </Typography>
      </Box>
   )
}

export default Logo
