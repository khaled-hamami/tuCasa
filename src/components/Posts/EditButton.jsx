import React from 'react'
import styled from '@emotion/styled'
import { Button } from '@mui/material'

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

function EditButton({ id }) {
   return (
      <>
         <CustomMuiButton variant="contained" size="large">
            modifier
         </CustomMuiButton>
      </>
   )
}

export default EditButton
