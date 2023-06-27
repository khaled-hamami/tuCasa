import React from 'react'
import { Box, TextField } from '@mui/material'
function SearchFieldEmail() {
   return (
      <Box p="0  30px">
         <TextField
            color="info"
            id="email-form-input"
            label="email"
            variant="standard"
            type="email"
            fullWidth
         />
      </Box>
   )
}

export default SearchFieldEmail
