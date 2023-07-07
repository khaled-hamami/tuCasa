import React from 'react'
import { Close, PostAdd } from '@mui/icons-material'
import { Box, Button, ButtonGroup, TextField } from '@mui/material'
import styled from '@emotion/styled'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

function PostForm({ setAddPostDisplay }) {
   /********************** YUP RULES SCHEMA  ***************************/

   const schema = yup.object({})

   /***********************    PASS THE USER INFO TO THE FETCH FUNCTION     *************/

   const form = useForm({
      resolver: yupResolver(schema),
   })

   const { register, handleSubmit, formState } = form
   const { errors } = formState

   /********************** CUSTOM MUi BUTTON  ***************************/

   const CustomButton = styled(Button)(({ theme }) => ({
      fontSize: { xs: '.6rem', md: '.8em' },
      color: theme.palette.info.main,
      '&:hover': {
         backgroundColor: theme.palette.primary.light,
         color: theme.palette.secondary.light,
      },
   }))

   /***********************   THE COMPONENT   *************/

   return (
      <form
         style={{
            width: '80%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
         }}
      >
         <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            gap="15px"
            sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
         >
            <TextField
               id="filler"
               name="filler"
               color="info"
               fullWidth
               label="Preciser Votre Location"
            />
            <TextField
               id="preciseLocation"
               name="preciseLocation"
               fullWidth
               color="info"
               label="Preciser Votre Location"
            />
         </Box>
         <TextField
            id="description"
            name="description"
            fullWidth
            color="info"
            label="Description"
         />

         <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: '30px', sm: '80px' } }}
         >
            <TextField id="price" name="price" label="Prix" color="info" />
            <TextField
               id="roomsNumber"
               name="roomsNumber"
               label=" Nombre des chambres"
               color="info"
            />
         </Box>
         <Button variant="ou">Ajouter des images</Button>

         <ButtonGroup fullWidth sx={{ gap: { xs: '20px', md: '50px' } }}>
            <CustomButton onClick={() => setAddPostDisplay(false)} variant="contained" size="small">
               Annuler &nbsp;
               <Close />
            </CustomButton>
            <CustomButton size="small" variant="contained" type="submit">
               Confirmer &nbsp;
               <PostAdd />
            </CustomButton>
         </ButtonGroup>
      </form>
   )
}

export default PostForm
