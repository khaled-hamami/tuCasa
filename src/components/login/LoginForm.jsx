import { Box, Paper, Typography } from '@mui/material'
import SearchFieldEmail from './SearchFieldEmail'
import SearchFieldPassword from './SearchFieldPassword'

function LoginForm() {
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
         }}
      >
         <Paper
            elevation={5}
            sx={{
               display: 'flex',
               flexDirection: 'column',
               width: '100%',
               p: { xs: '10px 5px', sm: '20px 20px', md: '60px 30px' },
               height: 'clamp(500px ,40vw , 700px)',
            }}
         >
            <Typography variant="h4" color="secondary.dark" textAlign="center" fontWeight="bold">
               Login
            </Typography>
            <SearchFieldEmail />
            <SearchFieldPassword />
         </Paper>
      </Box>
   )
}

export default LoginForm
