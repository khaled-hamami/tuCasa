import React, { useState } from 'react'
import { IconButton } from '@mui/material'
import { Clear } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import { Box } from '@mui/material'
import DrawerMenu from './DrawerMenu'

function MobileDrawer() {
   const [isMenuOpen, setMenuOpen] = useState(false)

   const openMenu = () => {
      setMenuOpen(true)
   }

   const closeMenu = () => {
      setMenuOpen(false)
   }

   return (
      <Box
         sx={{
            display: { md: 'none' },
            position: 'fixed',
            width: '100%',
            backgroundColor: 'primary.dark',
            padding:'2px 0px'
         }}
      >
         <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <IconButton onClick={openMenu}>
               <MenuIcon />
            </IconButton>
            <IconButton onClick={closeMenu}>{isMenuOpen && <Clear fontSize="large" />}</IconButton>
         </Box>
         {isMenuOpen && <DrawerMenu />}
      </Box>
   )
}

export default MobileDrawer
