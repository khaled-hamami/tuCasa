import React from 'react'
import { Box, Divider, IconButton, Typography } from '@mui/material'
import { Email, Facebook, GitHub, LinkedIn } from '@mui/icons-material'
import copyToClipboard from '../../utils/CopyToClipboard'
const redirect = (link) => {
   window.open(link, '_blank')
}
function Footer() {
   return (
      <Box
         display="flex"
         width="100%"
         flexDirection="column"
         mt="15vw"
         pb="40px"
         alignItems="center"
         color="secondary.main"
         position="relative"
      >
         <Box
            sx={{
               display: 'flex',
               width: '80%',
               height: '250px',
               justifyContent: 'space-between',
               gap: '15vw',
            }}
         >
            <Box
               sx={{
                  display: 'flex',
                  gap: '10vw',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                  flexDirection: { xs: 'column', md: 'row' },
                  whiteSpace: 'nowrap',
               }}
            >
               <Box>
                  <Typography>placeholder</Typography>
                  <br />
                  <Typography>placeholder</Typography>
                  <br />
                  <Typography>placeholder</Typography>
               </Box>
               <Box>
                  <Typography>placeholder</Typography>
                  <br />
                  <Typography>placeholder</Typography>
                  <br />
                  <Typography>placeholder</Typography>
               </Box>
            </Box>
            <Box
               sx={{
                  display: 'flex',
                  gap: '10vw',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                  flexDirection: { xs: 'column', md: 'row' },
                  whiteSpace: 'nowrap',
               }}
            >
               <Box>
                  <Typography>placeholder</Typography>
                  <br />
                  <Typography>placeholder</Typography>
                  <br />
                  <Typography>placeholder</Typography>
               </Box>
               <Box>
                  <Typography>placeholder</Typography>
                  <br />
                  <Typography>placeholder</Typography>
                  <br />
                  <Typography>placeholder</Typography>
               </Box>
            </Box>
         </Box>
         <Divider
            sx={{
               width: '80%',
               backgroundColor: 'secondary.dark',
               marginY: '3vw',
               marginTop: { xs: '150px', md: '3vw' },
            }}
         />
         <Box
            sx={{
               display: 'flex',
               justifyContent: 'space-between',
               width: { xs: '60%', sm: '30%', md: '20%' },
               margin: 'auto',
               mb: '50px',
            }}
         >
            <IconButton
               onClick={() => redirect('https://www.facebook.com/profile.php?id=100028537561096')}
            >
               <Facebook />
            </IconButton>
            <IconButton onClick={() => redirect('https://www.linkedin.com/in/khaledhm')}>
               <LinkedIn />
            </IconButton>
            <IconButton onClick={() => redirect('https://github.com/khaled-hamami')}>
               <GitHub />
            </IconButton>
            <IconButton onClick={() => copyToClipboard()}>
               <Email />
            </IconButton>
         </Box>
         <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt="5vw"
            alignSelf="start"
            width="100%"
            position="absolute"
            bottom="0"
            bgcolor="secondary.dark"
            color="primary.light"
         >
            <img
               src="https://davidgerard.co.uk/blockchain/wp-content/uploads/2021/11/creativecommons.png"
               alt="creative commons"
               style={{
                  width: '50px',
                  height: '26px',
               }}
            />
            <Typography fontWeight="bold">creative commons</Typography>
         </Box>
      </Box>
   )
}

export default Footer
