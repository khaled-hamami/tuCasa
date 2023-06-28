import React from 'react'
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router'
import icon from '../../assets/icon.png'

function Logo() {
   const navigate = useNavigate()
   return (
      <Box
         onClick={() => navigate('/')}
         sx={{
            display: 'flex',
            justifyContent: { sx: 'left', sm: 'center' },
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
         }}
      >
         <img src={icon} alt="tu Casa logo" height="45px" width="45px" />

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
