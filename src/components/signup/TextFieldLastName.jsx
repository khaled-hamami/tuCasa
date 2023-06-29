import React from 'react'
import { Box, TextField } from '@mui/material'

function TextFieldName() {
   return (
      <Box>
         <TextField
            required
            color="info"
            id="LastName-form-input"
            label="Nom"
            variant="standard"
            type="text"
            fullWidth
         />
      </Box>
   )
}

export default TextFieldName
