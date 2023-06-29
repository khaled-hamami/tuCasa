import React from 'react'
import { FormControlLabel, Checkbox } from '@mui/material'

function RememberMe() {
   return (
      <FormControlLabel
         labelPlacement="start"
         label="Se souvenir de moi"
         control={<Checkbox defaultChecked color="info" />}
         sx={{ flexDirection: 'row' }}
      />
   )
}
export default RememberMe
