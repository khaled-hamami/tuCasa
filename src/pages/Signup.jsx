import { Box } from '@mui/material'
import React from 'react'
import SignUpForm from '../components/signup/SignUpForm'

function Signup() {
   return (
      <Box sx={{ height: 'auto', width: '100%', backgroundColor: 'primary.main' }}>
         <SignUpForm />
      </Box>
   )
}

export default Signup
