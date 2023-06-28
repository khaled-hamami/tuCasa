import React from 'react'
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router'

function ForgotYourPassword() {
   const navigate = useNavigate()
   return (
      <Box display="flex" gap="5px">
         <Typography
            color="secondary.main"
            ml="28px"
            onClick={() => navigate('/signup')}
            sx={{ color: 'info.main', textDecoration: 'underline', cursor: 'pointer' ,'&:hover':{color:'info.dark'} }}
         >
            Forgot Your Password ?
         </Typography>
      </Box>
   )
}

export default ForgotYourPassword
