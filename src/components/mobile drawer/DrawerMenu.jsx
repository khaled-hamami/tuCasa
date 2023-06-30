import React, { useState } from 'react'
import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Flag } from '@mui/icons-material'
import { Box, ListItemIcon } from '@mui/material'
import StatesData from '../city list/data.json'
const StateList = StatesData.data
import '../../styles/CustomScrollBar.css'

function DrawerMenu({ display }) {
   const [States, setStatesData] = useState(StateList)
   return (
      <List
         className="custom-scrollbar"
         sx={{
            position: 'fixed',
            height: '900px',
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
export default DrawerMenu
