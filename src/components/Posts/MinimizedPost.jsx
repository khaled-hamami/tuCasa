import React from 'react'
import { Box, Paper, Typography, Button } from '@mui/material'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router'
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'

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

function MinimizedPost({ id, images, location, price, edit }) {
   const navigate = useNavigate()
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
            <Box width="100%" height="80%">
               <Box width="100%" height="80%">
                  <img src={images[0]} width="100%" height="100%" style={{ borderRadius: '3px' }} />
               </Box>
               <Box
                  width="100%"
                  height="20%"
                  bgcolor="grey"
                  display="flex"
                  justifyContent="center"
                  alignItems={'center'}
                  border="solid .1px"
                  borderColor="rgba(150,150,150,.5)"
               >
                  <Typography variant="h3">
                     {images.length > 1 ? `+${images.length - 1}` : ''}
                  </Typography>
               </Box>
            </Box>
            <Box display="flex" justifyContent="space-between">
               <Box>
                  <Typography variant="h6">{location}</Typography>
                  <Typography variant="h6">{price}dt</Typography>
               </Box>

               <CustomMuiButton variant="contained" onClick={() => navigate(`/posts/${id}`)}>
                  Agrandir
               </CustomMuiButton>

               {edit && <EditButton id={id} />}
               {edit && <DeleteButton id={id} />}
            </Box>
         </Paper>
      </Box>
   )
}

export default MinimizedPost
