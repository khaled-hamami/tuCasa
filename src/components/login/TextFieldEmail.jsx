import React from 'react'
import { Box, TextField } from '@mui/material'

function TextFieldEmail() {
   return (
      <Box p="0  30px">
         <TextField
            required
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

export default TextFieldEmail
