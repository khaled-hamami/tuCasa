import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Backdrop, Button, IconButton } from '@mui/material'
import getContactInfo from '../../apis/getContactInfo'

function Popup({ setOpen, content, open }) {
   return (
      <Backdrop
         sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 100 }}
         open={open}
         onClick={() => setOpen(false)}
      >
         {content}
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <Button
            variant="contained"
            sx={{
               color: 'primary.main',
               bgcolor: 'secondary.main',
               '&:hover': { bgcolor: 'secondary.dark' },
            }}
            onClick={() => navigator.clipboard.writeText(content)}
         >
            Copier
         </Button>
      </Backdrop>
   )
}

export const CustomMuiButton = styled(Button)(({ theme }) => ({
   fontSize: { xs: '.6rem', md: '.8em' },
   height: '40px',
   padding: '0 20px',
   color: theme.palette.info.main,
   '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.secondary.light,
   },
}))
function ContactButton({ id }) {
   const [result, setResult] = useState()
   const [open, setOpen] = useState(false)
   const handleClick = async () => {
      await getContactInfo(id, setResult, setOpen)
   }
   return (
      <>
         <CustomMuiButton
            variant="contained"
            sx={{ width: { xs: '100px', sm: '110px', md: '130px' } }}
            onClick={handleClick}
         >
            contact
         </CustomMuiButton>
         {result && open && <Popup setOpen={setOpen} content={result} open={true} />}
      </>
   )
}

export default ContactButton
