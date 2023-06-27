import React from 'react'
import { Box, TextField } from '@mui/material'
function SearchFieldPassword() {
   return (
      <Box p="0  30px">
         <TextField
            color="info"
            id="password-form-input"
            label="password"
            variant="standard"
            type="password"
            fullWidth
         />
      </Box>
   )
}

export default SearchFieldPassword
