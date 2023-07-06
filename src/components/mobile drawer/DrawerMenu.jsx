import React, { useState } from 'react'
import '../../styles/CustomScrollBar.css'
import { Box, ListItemIcon, Collapse, List, ListItemButton, ListItemText } from '@mui/material'
import StatesData from '../city list/data.json'
import { delegation } from '../city list/CityList'
import { ExpandLess, ExpandMore, Flag } from '@mui/icons-material'
import { useAtom } from 'jotai'

const StateList = StatesData.data

function DrawerMenu({ display }) {
   const [States, setStatesData] = useState(StateList)

   //set the selected
   const [selectedDelegation, setSelectedDelegation] = useAtom(delegation)
   return (
      <List
         className="custom-scrollbar"
         sx={{
            position: 'fixed',
            height: '75vh',
            width: '100%',
            overflowY: 'scroll',
            bgcolor: 'primary.light',
            color: 'secondary.main',
            display: { display },
         }}
         component="nav"
         aria-labelledby="nested-list-subheader"
      >
         {StateList.map((State, index) => {
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
                     {State.delegations.map((mobiledelegation) => {
                        return (
                           <List
                              component="div"
                              disablePadding
                              key={mobiledelegation}
                              onClick={() => setSelectedDelegation(() => mobiledelegation)}
                           >
                              <ListItemButton sx={{ pl: 7 }}>
                                 <ListItemIcon>
                                    <Flag fontSize="sm" />
                                 </ListItemIcon>
                                 <ListItemText primary={mobiledelegation} />
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
export default DrawerMenu
