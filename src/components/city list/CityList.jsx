import React, { useState } from 'react'
import '../../styles/CustomScrollBar.css'
import { Box, List, ListItemButton, ListItemText, ListItemIcon, Collapse } from '@mui/material'
import { ExpandLess, ExpandMore, Flag } from '@mui/icons-material'
import StatesData from './data.json'

const StateList = StatesData.data

function CityList() {
   const [States, setStatesData] = useState(StateList)

   return (
      <List
         className="custom-scrollbar"
         sx={{
            position: 'fixed',
            height: '90vh',
            width: '30%',
            maxWidth: 300,
            overflowY: 'scroll',
            bgcolor: 'primary.light',
            color: 'secondary.main',
            display: { xs: 'none', md: 'block' },
         }}
         component="nav"
         aria-labelledby="nested-list-subheader"
      >
         {StateList.map((State, index) => {
            //maps all 24 states to a list
            return (
               //it took me a day :)
               <Box key={State.id}>
                  <ListItemButton
                     onClick={() => {
                        setStatesData((prev) => {
                           const updatedStates = [...prev]
                           updatedStates[index] = {
                              ...updatedStates[index],
                              open: !updatedStates[index].open,
                           }
                           return updatedStates
                        })
                     }}
                  >
                     <ListItemText primary={State.name} sx={{ ml: 2.5 }} />
                     {State.open ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>

                  <Collapse in={States[index].open} timeout="auto" unmountOnExit>
                     {/*  maps all sub states for each state "nested mapping" */}
                     {State.delegations.map((gouvernment) => {
                        return (
                           <List component="div" disablePadding key={gouvernment}>
                              <ListItemButton sx={{ pl: 7 }}>
                                 <ListItemIcon>
                                    <Flag fontSize="sm" />
                                 </ListItemIcon>
                                 <ListItemText primary={gouvernment} />
                              </ListItemButton>
                           </List>
                        )
                     })}
                  </Collapse>
               </Box>
            )
         })}
      </List>
   )
}
export default CityList
