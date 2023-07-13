import React from 'react'
import { Box, InputBase } from '@mui/material'

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
               backgroundColor: 'secondary.light',
               color: 'primary.dark',
               p: '0px 5px',
               borderRadius: '5px',
            }}
         ></InputBase>
      </Box>
   )
}

export default Search
