import React from 'react'
import { Box } from '@mui/material'
import LoginForm from '../components/login/LoginForm'
function Login() {
   return (
      <Box sx={{ height: 'auto', width: '100%', backgroundColor: 'primary.light' }}>
         <LoginForm />
      </Box>
   )
}

export default Login
