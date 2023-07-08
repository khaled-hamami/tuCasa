import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useAtom } from 'jotai'
import CityList, { delegation } from '../components/city list/CityList'
import MobileDrawer from '../components/mobile drawer/mobileDrawer'
import MinimizedPost from '../components/Posts/MinimizedPost'
import AddButton from '../components/add post/AddButton'
import AddPost from '../components/add post/AddPost'

function Rentals() {
   //controle the add post popup
   const [addPostDisplay, setAddPostDisplay] = useState(false)

   //the selected state from the list passed by jotai global state ('useatom')
   const [selectedDelegation] = useAtom(delegation)

   //the componnet
   return (
      <Box sx={{ display: 'flex', height: '100%', width: '100%', backgroundColor: 'primary.main' }}>
         <AddPost display={addPostDisplay} setAddPostDisplay={setAddPostDisplay} />
         <MobileDrawer />
         <CityList />
         <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-evenly"
            sx={{ marginLeft: { md: '300px' } }}
            width="100%"
         >
            <Typography
               variant="h5"
               sx={{
                  display: 'flex',
                  alignItems: 'center',
                  letterSpacing: '-1.2px',
                  color: 'secondary.light',
                  position: 'fixed',
                  zIndex: '0',
                  borderRadius: '10px',
                  textAlign: 'center',
                  bgcolor: 'primary.dark',
                  p: '5px 0',
                  justifyContent: { xs: 'space-between', md: 'space-around' },
                  fontSize: { xs: '1rem', sm: '1.3rem', md: '1.5rem' },
                  width: { xs: '70%', sm: '80%', md: '90%' },
               }}
            >
               {selectedDelegation}
               <AddButton setAddPostDisplay={setAddPostDisplay} />
            </Typography>

            <MinimizedPost id="" location="el fahs" price="400" images={['img1', 'img2', 'img3','img4']} />
            <MinimizedPost id="" location="el fahs" price="400" images={['img1', 'img2', 'img3','img4']} />
            <MinimizedPost id="" location="el fahs" price="400" images={['img1', 'img2', 'img3','img4']} />
            <MinimizedPost id="" location="el fahs" price="400" images={['img1', 'img2', 'img3','img4']} />
            <MinimizedPost id="" location="el fahs" price="400" images={['img1', 'img2', 'img3','img4']} />
         </Box>
      </Box>
   )
}
export default Rentals
