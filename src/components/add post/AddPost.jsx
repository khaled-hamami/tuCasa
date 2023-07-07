import React from 'react'
import { Box, Paper } from '@mui/material'
import PostForm from './PostForm'

function AddPost({ display, setAddPostDisplay }) {
   return (
      <Box
         display={display ? 'flex' : 'none'}
         sx={{
            position: 'fixed',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            zIndex: '3',
            top: '0',
         }}
      >
         <Box
            sx={{
               width: { xs: '80%', md: '60%' },
               minWidth: '330px',
               height: '80%',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               backgroundColor: 'primary.main',
               borderRadius: '20px',
               border: '1px solid',
               borderColor: 'info.main',
            }}
         >
            <Paper
               elevation={2}
               sx={{
                  backgroundColor: 'primary.light',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: 'rgb(red)',
                  height: '90%',
                  p: { xs: '10px 5px', sm: '20px 20px', md: '60px 30px' },
               }}
            >
               <PostForm setAddPostDisplay={setAddPostDisplay} />
            </Paper>
         </Box>
      </Box>
   )
}

export default AddPost
