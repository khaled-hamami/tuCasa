import React from 'react'
import { Box, Button, ButtonGroup, Container, IconButton, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import { Mouse } from '@mui/icons-material'
import { useNavigate } from 'react-router'
import icon from '../assets/icon.png'
import LoginButton from '../components/navbar/LoginButton'

function Home() {
   const navigate = useNavigate()

   return (
      <Box sx={{ height: '100%', width: '100%', backgroundColor: 'primary.main' }}>
         <Container sx={{ display: 'flex', flexDirection: 'column', pt: {xs:'50px',sm:'100px'}, gap: {xs:'40px',md:'100px'} }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
               <Box flex="1.5">
                  <Typography
                     noWrap={false}
                     variant="h3"
                     color="secondary.main"
                     letterSpacing="-1.2px"
                     fontWeight="bold"
                     sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}
                  >
                     Welcome to Your Best Guide For Renting in
                  </Typography>
                  <Typography
                     variant="h3"
                     color={red['A700']}
                     letterSpacing="-1.2px"
                     fontWeight="bold"
                  >
                     Tunisia
                  </Typography>
               </Box>
               <Box flex="1" display="flex" justifyContent="center" alignItems="center" gap="25px">
                  <Typography
                     variant="h3"
                     color="secondary.main"
                     letterSpacing="-1.2px"
                     fontWeight="bold"
                  >
                     tu Casa
                  </Typography>
                  <img width="100px" height="100px" src={icon} alt="page logo" />
               </Box>
            </Box>

            <Box>
               <Typography variant="h6" color="secondary.light">
                  with 'tu Casa' dont bother trying to sell or rent homes , sitback relax and brows
                  <br /> because we will do it for you
               </Typography>
            </Box>

            <Box>
               <Box display="flex" gap="15px" sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
                  <Box onClick={() => navigate('/rentals')}>
                     <LoginButton content="Get Started" width="250px" />
                  </Box>
                  <Box onClick={() => navigate('/about')}>
                     <LoginButton content="About us" width="250px" />
                  </Box>
               </Box>
            </Box>
            <Box>
               <IconButton>
                  <Mouse />
                  &nbsp;&nbsp;
                  <Typography> Scroll to see more section</Typography>
               </IconButton>
            </Box>
         </Container>
      </Box>
   )
}

export default Home
