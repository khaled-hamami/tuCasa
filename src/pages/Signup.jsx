import React from 'react'
import { Box, Typography } from '@mui/material'
import SignUpForm from '../components/signup/SignUpForm'
import { LoggedIn } from '../App'
import { useAtom } from 'jotai'

function Signup() {
   const [isLoggedIn, setIsLoggedIn] = useAtom(LoggedIn)

   return (
      <Box sx={{ height: 'auto', width: '100%', backgroundColor: 'primary.main' }}>
         {isLoggedIn ? (
            <Typography variant="h4" p="20px" color="secondary.main" fontWeight="bolder">
               vous êtes déjà connecter
            </Typography>
         ) : (
            <SignUpForm />
         )}
      </Box>
   )
}

export default Signup
