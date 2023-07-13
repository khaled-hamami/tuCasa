import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Close, PostAdd } from '@mui/icons-material'
import { Box, Button, ButtonGroup, TextField, Typography } from '@mui/material'
import styled from '@emotion/styled'
import schema from './schema'
import DelegationList from './DelegationList'
import createPost from '../../apis/createPost'

function PostForm({ setAddPostDisplay }) {
   /********************** handle Image Upload  ***************************/

   const fileInputRef = useRef(null)
   const [uploadedImages, setUploadedImages] = useState([])

   const handleImageUpload = (event) => {
      const files = event.target.files
      const uploadedImages = []

      for (let i = 0; i < files.length; i++) {
         const file = files[i]
         const reader = new FileReader()

         reader.onload = () => {
            const imageUrl = reader.result
            uploadedImages.push(imageUrl)

            // Update the state with the new array of uploaded image URLs
            setUploadedImages([...uploadedImages])
         }

         reader.readAsDataURL(file)
      }
   }

   const handleButtonClick = () => {
      fileInputRef.current.click()
   }

   /***********************    YUP INTEGRATION WITH REACT-HOOK-FORM       ***************/

   const form = useForm({ resolver: yupResolver(schema) })

   const { register, handleSubmit, formState } = form
   const { errors } = formState

   /***********************    PASS THE USER INFO TO THE FETCH FUNCTION     *************/
   // a state to disable the submit button to prevent the user to sens multiple requests
   const [fetching, setFetching] = useState(false)

   const submit = (data) => {
      if (uploadedImages.length) {
         createPost(
            data.delegation,
            data.preciseLocation,
            data.description,
            data.price,
            data.roomsNumber,
            uploadedImages,
            setFetching
         )
      } else alert('please provide one image or more')
   }

   /********************** CUSTOM MUi BUTTON  ***************************/

   const CustomButton = styled(Button)(({ theme }) => ({
      fontSize: { xs: '.6rem', md: '.8em' },
      color: theme.palette.info.main,
      '&:hover': {
         backgroundColor: theme.palette.primary.light,
         color: theme.palette.secondary.light,
      },
   }))

   /***********************   A STATES   *************/

   //handle the state when the user selects a delegation
   const [selectedItem, setSelectedItem] = useState(null)

   /***********************   THE COMPONENT   *************/

   return (
      <form
         onSubmit={handleSubmit(submit)}
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
            <DelegationList
               setSelectedItem={setSelectedItem}
               name={'delegation'}
               registrer={{ ...register('delegation') }}
               error={errors.delegation ? true : false}
               helperText={errors.delegation?.message}
            />
            <TextField
               id="preciseLocation"
               name="preciseLocation"
               fullWidth
               color="info"
               label="Preciser Votre Location"
               multiline
               {...register('preciseLocation')}
               error={errors.preciseLocation ? true : false}
               helperText={errors.preciseLocation?.message}
            />
         </Box>
         <TextField
            id="description"
            name="description"
            fullWidth
            color="info"
            label="Description"
            multiline
            {...register('description')}
            error={errors.description ? true : false}
            helperText={errors.description?.message}
         />

         <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: '30px', sm: '80px' } }}
         >
            <TextField
               id="price"
               name="price"
               label="Prix"
               color="info"
               {...register('price')}
               error={errors.price ? true : false}
               helperText={errors.price?.message}
            />
            <TextField
               id="roomsNumber"
               name="roomsNumber"
               label=" Nombre des chambres"
               color="info"
               {...register('roomsNumber')}
               error={errors.roomsNumber ? true : false}
               helperText={errors.roomsNumber?.message}
            />
         </Box>
         <>
            <input
               type="file"
               accept=".png , .jpg , .jpeg"
               onChange={handleImageUpload}
               style={{ display: 'none' }}
               ref={fileInputRef}
               multiple
            />
            <Button variant="contained" color="primary" onClick={handleButtonClick}>
               Importer des images
            </Button>
            <Typography>Images importées : {uploadedImages.length}</Typography>
         </>

         <ButtonGroup fullWidth sx={{ gap: { xs: '20px', md: '50px' } }}>
            <CustomButton
               onClick={() => setAddPostDisplay(false)}
               variant="contained"
               size="small"
               disabled={fetching}
            >
               Annuler&nbsp;
               <Close />
            </CustomButton>
            <CustomButton size="small" variant="contained" type="submit" disabled={fetching}>
               Confirmer&nbsp;
               <PostAdd />
            </CustomButton>
         </ButtonGroup>
      </form>
   )
}

export default PostForm
