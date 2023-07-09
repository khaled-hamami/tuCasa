import React, { useState } from 'react'
import { IconButton, Typography } from '@mui/material'
import { Clear } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import { Box } from '@mui/material'
import DrawerMenu from './DrawerMenu'
import { useAtom } from 'jotai'
import { delegation } from '../city list/CityList'
import AddButton from '../add post/AddButton'

function MobileDrawer({ setAddPostDisplay }) {
   const [selectedDelegation] = useAtom(delegation)

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
            padding: '2px 0px',
            zIndex: '2',
         }}
      >
         <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <IconButton onClick={openMenu}>
               <MenuIcon />
            </IconButton>
            <Typography
               variant="h5"
               sx={{
                  display: { md: 'none' },
                  letterSpacing: '-1.2px',
                  color: 'secondary.light',
                  zIndex: '0',
                  borderRadius: '10px',
                  textAlign: 'center',
                  bgcolor: 'primary.dark',
                  p: '5px 0',
                  fontSize: { xs: '1rem', sm: '1.3rem', md: '1.5rem' },
               }}
            >
               {selectedDelegation}
            </Typography>
            <Box
               sx={{
                  fontSize: { xs: '1rem', sm: '1.3rem', md: '1.5rem' },
               }}
            >
               <AddButton setAddPostDisplay={setAddPostDisplay} />
            </Box>
            <IconButton onClick={closeMenu}>{isMenuOpen && <Clear  />}</IconButton>
         </Box>
         {isMenuOpen && <DrawerMenu />}
      </Box>
   )
}

export default MobileDrawer
