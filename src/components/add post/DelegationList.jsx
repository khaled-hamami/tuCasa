import React, { useState } from 'react'
import StatesData from '../../assets/data.json'
import { Autocomplete, Paper, TextField } from '@mui/material'

function DelegationList({ setSelectedItem, name, registrer, error, helperText }) {
   //making the required object for the autocomlete

   const statesList = []
   const delegationSet = new Set()
   StatesData.data.forEach((value) => {
      statesList.push(value.delegations)
   })

   statesList.forEach((value) => {
      value.forEach((delegation) => {
         delegationSet.add(delegation)
      })
   })
   const delegationList = Array.from(delegationSet)

   //handle the state when the user selects a delegation
   const handleSelection = (event, value) => {
      setSelectedItem(value)
   }

   return (
      <Autocomplete
         disablePortal
         id="combo-box-demo"
         options={delegationList}
         sx={{ width: 300 }}
         onChange={handleSelection}
         renderInput={(params) => (
            <TextField
               name={name}
               {...registrer}
               {...params}
               error={error}
               helperText={helperText}
               label="Delegation"
            />
         )}
         PaperComponent={(props) => (
            <Paper
               elevation={8} // Controls the shadow depth
               sx={{ backgroundColor: 'primary.light' }} // Set the desired background color
               {...props}
            />
         )}
      />
   )
}

export default DelegationList
