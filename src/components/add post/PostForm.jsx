import React, { useRef, useState } from 'react'
import { Close, PostAdd } from '@mui/icons-material'
import { Box, Button, ButtonGroup, TextField, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import DelegationList from './DelegationList'

function PostForm({ setAddPostDisplay }) {
   /********************** YUP RULES SCHEMA  ***************************/

   const schema = yup.object({})

   /********************** handle Image Upload  ***************************/

   const fileInputRef = useRef(null)
   const [uploadedImages, setUploadedImages] = useState([])

   const handleImageUpload = (event) => {
      const files = event.target.files
      const imagesArray = []

      for (let i = 0; i < files.length; i++) {
         const file = files[i]
         const reader = new FileReader()

         reader.onload = () => {
            const imageUrl = reader.result
            imagesArray.push(imageUrl)

            // Update the state with the new array of uploaded image URLs
            setUploadedImages([...imagesArray])
         }

         reader.readAsDataURL(file)
      }
   }

   const handleButtonClick = () => {
      fileInputRef.current.click()
   }
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

   /***********************   A STATE   *************/

   //handle the state when the user selects a delegation
   const [selectedItem, setSelectedItem] = useState(null)

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
            <DelegationList setSelectedItem={setSelectedItem} />
            <TextField
               id="preciseLocation"
               name="preciseLocation"
               fullWidth
               color="info"
               label="Preciser Votre Location"
               multiline
            />
         </Box>
         <TextField
            id="description"
            name="description"
            fullWidth
            color="info"
            label="Description"
            multiline
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
         <>
            <input
               type="file"
               accept="image/*"
               onChange={handleImageUpload}
               style={{ display: 'none' }}
               ref={fileInputRef}
               multiple
            />
            <Button variant="contained" color="primary" onClick={handleButtonClick}>
               Importer des images
            </Button>
            <Typography>images téléchargées : {uploadedImages.length}</Typography>
         </>

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
