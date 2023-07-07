import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import CustomButton from './CustomButton'

function MinimizedPost({ id, images, location, price }) {
   return (
      <Box
         sx={{
            width: { xs: '90%', md: '45%' },
            margin: '100px auto',
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
               justifyContent: 'space-between',
               border: 'solid 1px ',
               borderColor: 'info.dark',
               borderRadius: '8px',
               height: 'clamp(500px ,40vw , 700px)',
               p: { xs: '10px 5px', sm: '20px 20px', md: '60px 30px' },
            }}
         >
            <Box width="100%" height="80%" bgcolor="rgba(255,76,76,.5)">
               <Box width="100%" height="80%" bgcolor="rgba(255,76,76,.5)">
                  <img src={images[0]} width="100%" height="100%" />
               </Box>
               <Box
                  width="100%"
                  height="20%"
                  bgcolor="rgba(75,75,75,.5)"
                  display="flex"
                  justifyContent="center"
                  alignItems={'center'}
                  border="solid .1px"
                  borderColor="rgba(150,150,150,.5)"
                  sx={{
                     cursor: 'pointer',
                  }}
               >
                  <Typography variant="h3">+{images.length - 1}</Typography>
               </Box>
            </Box>
            <Box display="flex" justifyContent="space-between">
               <Box>
                  <Typography variant="h6">{location}</Typography>
                  <Typography variant="h6">{price}</Typography>
               </Box>
               <CustomButton />
            </Box>
         </Paper>
      </Box>
   )
}

export default MinimizedPost
