import React from 'react'
import { Add } from '@mui/icons-material'
import { Button } from '@mui/material'

function AddButton({ setAddPostDisplay }) {
   return (
      <>
         <Button
            color="primary"
            variant="contained"
            size="small"
            sx={{ width: { xs: '50px', sm: '100px', md: '150px' } }}
            onClick={() => setAddPostDisplay(true)}
           
         >
            <Add sx={{ fontSize: { xs: '15px', md: '20px' }, color: 'info.light' }} />
         </Button>
      </>
   )
}

export default AddButton
