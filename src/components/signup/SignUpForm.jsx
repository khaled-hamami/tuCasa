import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import TextFieldPassword from '../login/TextFieldPassword'
import RememberMe from '../login/RememberMe'
import LoginButton from '../navbar/LoginButton'
import TextFieldEmail from '../login/TextFieldEmail'
import TextFieldName from './TextFieldName'
import TextFieldLastName from './TextFieldLastName'

function SignUpForm() {
   return (
      <Box
         sx={{
            width: { xs: '80%', sm: '65%', md: '45%' },
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
               S'inscrire
            </Typography>
            <Box display="flex" justifyContent="space-between" gap="15px" p="0 30px">
               <TextFieldLastName />
               <TextFieldName />
            </Box>
            <TextFieldEmail />
            <TextFieldPassword />
            <LoginButton width="56%" content="Créer un compte" />
         </Paper>
      </Box>
   )
}

export default SignUpForm
