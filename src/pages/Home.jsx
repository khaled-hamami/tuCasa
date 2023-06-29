import { Box, Typography } from '@mui/material'
import React from 'react'

function Home() {
   return (
      <Box sx={{ height: '100%', width: '100%', backgroundColor: 'primary.main' }}>
         <Typography variant="h4" color="secondary.main">
            Home page
         </Typography>
      </Box>
   )
}

export default Home
