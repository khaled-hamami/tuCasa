import React from 'react'
import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router'

function LoginButton({ width, content, type, disabled }) {
   return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
         <Button
            disabled={disabled}
            type={type}
            variant="contained"
            sx={{
               width: { width },
               p: '.5rem 1.5rem',
               fontWeight: 'bold',
               backgroundColor: 'secondary.dark',
               color: 'primary.light',
               '&:hover': {
                  backgroundColor: 'primary.light',
                  color: 'info.main',
               },
            }}
         >
            {content}
         </Button>
      </Box>
   )
}

export default LoginButton
