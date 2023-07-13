import React from 'react'
import { Box } from '@mui/material'
import LoginForm from '../components/login/LoginForm'
import { useAtom } from 'jotai'
import { LoggedIn } from '../App'
import LoginButton from '../components/navbar/LoginButton'

function Login() {
   const [isLoggedIn, setIsLoggedIn] = useAtom(LoggedIn)

   const handleLogOut = () => {
      //remove login token from local storage
      localStorage.removeItem('userId')
      localStorage.removeItem('Theme')
      localStorage.removeItem('isLoggedIn')
      setIsLoggedIn(false)
      location.reload()
   }

   return (
      <Box sx={{ height: 'auto', width: '100%', backgroundColor: 'primary.main' }}>
         {isLoggedIn ? (
            <Box onClick={handleLogOut} pt="25px">
               <LoginButton content="deconnecter" />
            </Box>
         ) : (
            <LoginForm />
         )}
      </Box>
   )
}

export default Login
