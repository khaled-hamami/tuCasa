import React, { useState } from 'react'
import Box from '@mui/material/Box'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import DrawerMenu from './DrawerMenu'
import { Clear } from '@mui/icons-material'

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
         }}
      >
         <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <IconButton onClick={openMenu}>
               <MenuIcon />
            </IconButton>
            <IconButton onClick={closeMenu}>{isMenuOpen && <Clear fontSize='large' />}</IconButton>
         </Box>
         {isMenuOpen && <DrawerMenu />}
      </Box>
   )
}

export default MobileDrawer
