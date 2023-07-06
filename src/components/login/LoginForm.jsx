import React, { useState } from 'react'
import { Box, Paper, TextField, Typography } from '@mui/material'
import RememberMe from './RememberMe'
import LoginButton from '../navbar/LoginButton'
import SignUpLink from './SignUpLink'
import ForgotYourPassword from './ForgotYourPassword'


function LoginForm() {
   const [Password, SetPassword] = useState('')
   const [PasswordLength, setPasswordLength] = useState(0)
   
   const handleChange = (e) => {
      SetPassword(e.target.value)
      setPasswordLength(e.target.value.length)
   }
   
   return (
      <Box
         sx={{
            width: { xs: '80%', sm: '65%', md: '30%' },
            minWidth: '350px',
            paddingTop: '100px  ',
            margin: 'auto',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'primary.main',
         }}
      >
         <Paper
            elevation={15}
            sx={{
               backgroundColor: 'primary.light',
               display: 'flex',
               flexDirection: 'column',
               width: '100%',
               justifyContent: 'space-around',
               boxShadow: 'rgb(red)',
               height: 'clamp(500px ,40vw , 700px)',
               p: { xs: '10px 5px', sm: '20px 20px', md: '60px 30px' },
            }}
         >
            <Typography variant="h4" color="secondary.dark" textAlign="center" fontWeight="bold">
               Se connecter
            </Typography>

            <Box p="0  30px">
               <TextField
                  required
                  name="email"
                  color="info"
                  id="email-form-input"
                  label="email"
                  variant="standard"
                  type="email"
                  fullWidth
               />
            </Box>
            <Box p="0  30px">
               <TextField
                  onChange={handleChange}
                  error={PasswordLength > 8 ? true : false}
                  required
                  name="password"
                  color="info"
                  id="password-form-input"
                  label="mot de passe"
                  variant="standard"
                  type="password"
                  fullWidth
               />
            </Box>
            <RememberMe />
            <LoginButton width="40%" content="Connexion" />
            <SignUpLink />
            <ForgotYourPassword />
         </Paper>
      </Box>
   )
}

export default LoginForm
