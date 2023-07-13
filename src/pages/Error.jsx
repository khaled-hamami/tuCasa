import React from 'react'
import { Box, Typography } from '@mui/material'

function Error() {
   return (
      <Box bgcolor="primary.main">
         <Typography variant="h4" p="20px" color="secondary.main" fontWeight='bolder'>
            Page Non Trouvées
         </Typography>
      </Box>
   )
}

export default Error
