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
      localStorage.removeItem('userFirstName')
      localStorage.removeItem('userLastName')
      setIsLoggedIn(false)
      location.reload()
   }
   return (
      <Box sx={{ height: 'auto', width: '100%', backgroundColor: 'primary.main' }}>
         {isLoggedIn ? (
            <Box
               width="100%"
               display="flex"
               justifyContent="center"
               height="100vh"
               alignItems="center"
            >
               <Box onClick={() => handleLogOut()}>
                  <LoginButton content="deconnecter" />
               </Box>
            </Box>
         ) : (
            <LoginForm />
         )}
      </Box>
   )
}

export default Login
