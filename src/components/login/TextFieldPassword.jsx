import React, { useState } from 'react'
import { Box, TextField } from '@mui/material'

function TextFieldPassword() {
   const [Password, SetPassword] = useState('')
   const [PasswordLength, setPasswordLength] = useState(0)

   const handleChange = (e) => {
      SetPassword(e.target.value)
      setPasswordLength(e.target.value.length)
   }

   return (
      <Box p="0  30px">
         <TextField
            onChange={handleChange}
            error={PasswordLength > 8 ? true : false}
            required
            color="info"
            id="password-form-input"
            label="mot de passe"
            variant="standard"
            type="password"
            fullWidth
         />
      </Box>
   )
}

export default TextFieldPassword
