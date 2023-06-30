import React from 'react'
import { Box, Paper, Typography } from '@mui/material'

function RentCard() {
   return (
      <Box
         sx={{
            width: { xs: '90%', md: '45%' },
            paddingTop: '100px  ',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'primary.main',
         }}
      >
         <Paper
            elevation={15}
            sx={{
               backgroundColor: 'primary.light',
               display: 'flex',
               flexDirection: 'column',
               width: '100%',
               justifyContent: 'space-around',
               boxShadow: 'rgb(red)',
               height: 'clamp(500px ,40vw , 700px)',
               p: { xs: '10px 5px', sm: '20px 20px', md: '60px 30px' },
            }}
         >
            <Typography variant="h4" color="secondary.dark" textAlign="center" fontWeight="bold">
               Se connecter
            </Typography>
         </Paper>
      </Box>
   )
}

export default RentCard
