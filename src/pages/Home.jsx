import { Box, Container, Typography } from '@mui/material'
import React from 'react'

function Home() {
   return (
      <Box sx={{ height: '100%', width: '100%', backgroundColor: 'primary.main' }}>
         <Container sx={{ display: 'flex', flexDirection: 'column', pt:'100px' }}>
            <Box sx={{ display: 'flex' }}><Typography>Welcome to Your Best Guide For Renting</Typography></Box>
         </Container>
      </Box>
   )
}

export default Home
