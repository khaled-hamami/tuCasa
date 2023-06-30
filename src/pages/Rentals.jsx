import React, { useState } from 'react'
import { Box } from '@mui/material'
import CityList from '../components/city list/CityList'
import RentCard from '../components/rent card/RentCard'
import MobileDrawer from '../components/mobile drawer/mobileDrawer'

function Rentals() {
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
