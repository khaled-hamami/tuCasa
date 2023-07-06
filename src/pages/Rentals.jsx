import React from 'react'
import { Box, Typography } from '@mui/material'
import CityList, { delegation } from '../components/city list/CityList'
import RentCard from '../components/rent card/RentCard'
import MobileDrawer from '../components/mobile drawer/mobileDrawer'
import { useAtom } from 'jotai'

function Rentals() {
   //the selected state from the list passed by jotai global state ('useatom')
   const [selectedDelegation] = useAtom(delegation)
   return (
      <Box sx={{ display: 'flex', height: '100%', width: '100%', backgroundColor: 'primary.main' }}>
         <MobileDrawer />
         <CityList />
         <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-evenly"
            sx={{ marginLeft: { md: '300px' } }}
         >
            <Typography
               letterSpacing="-1.2px"
               variant="h5"
               color="secondary.light"
               position="fixed"
            >
               maison a louer dans {selectedDelegation}
            </Typography>
            <RentCard />
            <RentCard />
            <RentCard />
            <RentCard />
            <RentCard />
            <RentCard />
            <RentCard />
            <RentCard />
            <RentCard />
         </Box>
      </Box>
   )
}
export default Rentals
