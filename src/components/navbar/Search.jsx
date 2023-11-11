import React from 'react'
import { Box, InputBase } from '@mui/material'
import '../../styles/index.css'
function Search() {
   return (
      <Box
         sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            backgroundColor: 'primary.dark',
            paddingBottom: { xs: '10px', sm: '0px' },
         }}
      >
         <InputBase
            name="searchField"
            placeholder=" search..."
            fullWidth
            sx={{
               maxWidth: '300px',
               backgroundColor: 'primary.light',
               color: 'secondary.dark',
               fontWeight: 'bold',
               p: '0px 5px',
               borderRadius: '5px',
               '&:hover': {
                  border: '1px solid #aaa',
               },
               '&.Mui-focused': {
                  border: '1px solid rgb(0, 0, 0)',
               },
            }}
         />
      </Box>
   )
}

export default Search
