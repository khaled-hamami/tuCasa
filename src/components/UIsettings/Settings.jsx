import React from 'react'
import { Box, Paper,  Typography } from '@mui/material'
import ThemeToogler from './ThemeToogler'


function Settings() {
   return (
      <Box
         sx={{
            width: { xs: '80%', sm: '65%', md: '30%' },
            minWidth: '350px',
            paddingTop: '100px  ',
            margin: 'auto',
            height: '100%',
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
               height: 'clamp(500px ,40vw , 700px)',
               p: { xs: '10px 5px', sm: '20px 20px', md: '60px 30px' },
            }}
         >
            <Typography variant="h4" color="secondary.dark" textAlign="center" fontWeight="bold">
               Settings
            </Typography>
            <ThemeToogler />
         </Paper>
      </Box>
   )
}

export default Settings
