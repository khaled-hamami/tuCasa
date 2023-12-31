import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Paper, TextField, Typography } from '@mui/material'
import singupSchema from '../../schemas/signupSchema'
import LoginButton from '../navbar/LoginButton'
import createUser from '../../apis/createUser'
import Popup from '../popup/Popup'

function SignUpForm() {
   /***********************    YUP INTEGRATION WITH REACT-HOOK-FORM       ***************/

   const form = useForm({ resolver: yupResolver(singupSchema) })
   const { register, handleSubmit, formState } = form
   const { errors } = formState
   const [errMessage, setErrorMessage] = useState('error')
   //error popup
   const [open, setOpen] = useState(false)
   /***********************    PASS THE USER INFO TO THE FETCH FUNCTION     *************/

   // a state to disable the submit button to prevent the user to sens multiple requests
   const [fetching, setFetching] = useState(false)

   //pass user info
   const submit = (data) => {
      createUser(
         data.firstName,
         data.lastName,
         data.email,
         data.password,
         setFetching,
         setErrorMessage,
         setOpen
      )
   }

   /***********************    THE COMPONENT       **************************************/

   return (
      <>
         {open && <Popup setOpen={setOpen} err={errMessage} />}
         <Box
            sx={{
               width: { xs: '80%', sm: '65%', md: '45%' },
               minWidth: '350px',
               paddingTop: '50px  ',
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
                  p: { xs: '10px 5px', sm: '20px 20px', md: '60px 30px' },
                  width: '80%',
               }}
            >
               <form
                  onSubmit={handleSubmit(submit)}
                  style={{
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'space-around',
                     boxShadow: 'rgb(red)',
                     height: 'clamp(500px ,40vw , 600px)',
                     width: '100%',
                  }}
               >
                  <Typography
                     variant="h4"
                     color="secondary.dark"
                     textAlign="center"
                     fontWeight="bold"
                  >
                     S'inscrire
                  </Typography>
                  <Box display="flex" justifyContent="space-between" gap="15px" p="0 30px">
                     <TextField
                        name="firstName"
                        color="info"
                        id="firsName-form-input"
                        label="Nom"
                        variant="standard"
                        type="text"
                        fullWidth
                        {...register('firstName')}
                        error={errors.firstName ? true : false}
                        helperText={errors.firstName?.message}
                        autoFocus
                        autoComplete="current-firstName"
                     />
                     <TextField
                        name="lastName"
                        color="info"
                        id="lastName-form-input"
                        label="Prénom"
                        variant="standard"
                        type="text"
                        fullWidth
                        {...register('lastName')}
                        error={errors.lastName ? true : false}
                        helperText={errors.lastName?.message}
                        autoComplete="current-lastName"
                     />
                  </Box>
                  <Box p="0  30px">
                     <TextField
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
                        autoComplete="current-mail"
                     />
                  </Box>
                  <Box p="0  30px">
                     <TextField
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
                        autoComplete="current-password"
                     />
                  </Box>
                  <LoginButton
                     width="56%"
                     content="Créer un compte"
                     type="submit"
                     disabled={fetching}
                  />
               </form>
            </Paper>
         </Box>
      </>
   )
}

export default SignUpForm
