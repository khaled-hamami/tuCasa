import React from 'react'
import { useNavigate } from 'react-router'
import { Box, Typography } from '@mui/material'
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
            gap: '7px',
            cursor: 'pointer',
         }}
      >
         <img
            src={icon}
            alt="tu Casa logo"
            style={{
               height: { xs: '35px', lg: '45px' },
               width: { xs: '35px', lg: '45px' },
            }}
         />

         <Typography
            variant="h4"
            sx={{
               fontWeight: 'bold',
               color: 'secondary.dark',
               fontSize: { xs: '1.5rem', sm: '1.6rem' },
            }}
         >
            tu Casa
         </Typography>
      </Box>
   )
}

export default Logo
