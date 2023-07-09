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
            sx={{
               width: { xs: '50px', sm: '100px', md: '150px' },
               boxShadow: '0px 0px 0px 2px #0288d1',
            }}
            onClick={() => setAddPostDisplay(true)}
         >
            <Add sx={{ fontSize: { xs: '15px', md: '20px' }, color: 'info.light', zIndex:'1000' }} />
         </Button>
      </>
   )
}

export default AddButton
