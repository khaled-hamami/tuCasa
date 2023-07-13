import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Paper, TextField, Typography } from '@mui/material'
import login from '../../apis/login'
import schema from './shema'
import RememberMe from './RememberMe'
import LoginButton from '../navbar/LoginButton'
import SignUpLink from './SignUpLink'
import ForgotYourPassword from './ForgotYourPassword'

function LoginForm() {
   /***********************    YUP INTEGRATION WITH REACT-HOOK-FORM       ***************/

   const form = useForm({ resolver: yupResolver(schema) })
   const { register, handleSubmit, formState } = form
   const { errors } = formState

   /***********************    PASS THE USER INFO TO THE FETCH FUNCTION     *************/

   // a state to disable the submit button to prevent the user to sens multiple requests
   const [fetching, setFetching] = useState(false)

   //pass user info
   const submit = (data) => {
      login(data.email, data.password, setFetching)
   }

   /***********************    THE COMPONENT       **************************************/

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
         <form onSubmit={handleSubmit(submit)} style={{ width: '100%', height: '100%' }}>
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
                     autoComplete="true"
                     name="email"
                     color="info"
                     id="email-form-input"
                     label="email"
                     variant="standard"
                     type="text"
                     fullWidth
                     {...register('email')}
                     error={errors.email ? true : false}
                     helperText={errors.email?.message}
                  />
               </Box>
               <Box p="0  30px">
                  <TextField
                     autoComplete="true"
                     name="password"
                     color="info"
                     id="password-form-input"
                     label="mot de passe"
                     variant="standard"
                     type="password"
                     fullWidth
                     {...register('password')}
                     error={errors.password ? true : false}
                     helperText={errors.password?.message}
                  />
               </Box>
               <RememberMe />
               <LoginButton width="40%" content="Connexion" type={'submit'} disabled={fetching} />
               <SignUpLink />
               <ForgotYourPassword />
            </Paper>
         </form>
      </Box>
   )
}

export default LoginForm
