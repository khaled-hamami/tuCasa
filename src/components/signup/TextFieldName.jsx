import React from 'react'
import { Box, TextField } from '@mui/material'

function TextFieldLastName() {
   return (
      <Box>
         <TextField
            required
            color="info"
            id="name-form-input"
            label="Prénom"
            variant="standard"
            type="text"
            fullWidth
         />
      </Box>
   )
}

export default TextFieldLastName
