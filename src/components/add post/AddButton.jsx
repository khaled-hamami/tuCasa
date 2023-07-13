import React from 'react'
import { Add } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useAtom } from 'jotai'
import { LoggedIn } from '../../App'

function AddButton({ setAddPostDisplay }) {
   const [isLoggedIn, setIsLoggedIn] = useAtom(LoggedIn)

   return (
      <Button
         color="primary"
         variant="contained"
         size="small"
         sx={{
            width: { xs: '50px', sm: '100px', md: '150px' },
            boxShadow: '0px 0px 0px 2px #0288d1',
            display: isLoggedIn ? 'flex' : 'none',
         }}
         onClick={() => {
            isLoggedIn
               ? setAddPostDisplay(true)
               : alert('vous devez connecter pour ajouter une post')
         }}
      >
         <Add sx={{ fontSize: { xs: '15px', md: '20px' }, color: 'info.light', zIndex: '1000' }} />
      </Button>
   )
}

export default AddButton
