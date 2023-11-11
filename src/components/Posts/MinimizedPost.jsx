import React from 'react'
import { Box, Paper, Typography, Button } from '@mui/material'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router'
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'
import ContactButton from './ContactButton'

const CustomMuiButton = styled(Button)(({ theme }) => ({
   fontSize: { xs: '.6rem', md: '.8em' },
   height: '40px',
   padding: '0 20px',
   color: theme.palette.info.main,
   '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.secondary.light,
   },
}))

function MinimizedPost({ id, images, location, price, edit ,userId}) {
   const navigate = useNavigate()
   return (
      <Box
         sx={{
            width: { xs: '90%', sm: '75%', md: '70%', lg: '50%' },
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
            <Box width="100%" height="80%">
               <Box width="100%" height={images.length > 1 ? '80%' : '100%'}>
                  <img src={images[0]} width="100%" height="100%" style={{ borderRadius: '3px' }} />
               </Box>

               {images.length > 1 && (
                  <div style={{ position: 'relative', width: '100%', height: '20%' }}>
                     <img
                        src={images[1]}
                        style={{
                           width: '100%',
                           height: '100%',
                           filter: 'blur(5px)',
                           objectFit: 'cover',
                           position: 'absolute',
                           top: 0,
                           left: 0,
                           zIndex: 10,
                        }}
                     />
                     <div
                        style={{
                           display: 'flex',
                           justifyContent: 'center',
                           alignItems: 'center',
                           position: 'absolute',
                           top: 0,
                           left: 0,
                           width: '100%',
                           height: '100%',
                           zIndex: 11,
                        }}
                     >
                        <Typography variant="h3">
                           {images.length > 1 ? `+${images.length - 1}` : ''}
                        </Typography>
                     </div>
                  </div>
               )}
            </Box>
            <Box display="flex" justifyContent="space-between">
               <Box>
                  <Typography variant="h6">{location}</Typography>
                  <Typography variant="h6">{price}dt</Typography>
               </Box>
               <Box
                  sx={{
                     width: '60%',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'space-between',
                     flexDirection: { xs: 'column', sm: 'row' },
                  }}
               >
                  <CustomMuiButton variant="contained" onClick={() => navigate(`/posts/${id}`)}>
                     Agrandir
                  </CustomMuiButton>
                  {!edit && <ContactButton id={userId} />}

                  {edit && <EditButton id={id} />}
                  {edit && <DeleteButton id={id} />}
               </Box>
            </Box>
         </Paper>
      </Box>
   )
}

export default MinimizedPost
