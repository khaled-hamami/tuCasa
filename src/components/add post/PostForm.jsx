import React, { useRef, useState } from 'react'
import { Close, PostAdd } from '@mui/icons-material'
import { Box, Button, ButtonGroup, TextField, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
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

   /********************** YUP RULES SCHEMA  ***************************/

   const schema = yup.object({
      delegation: yup
         .string('la Delegation ne doit contenir que des caractères')
         .required('La Delegation est requis')
         .max(100, 'La Delegation ne doit pas dépasser 100 caractères')
         .min(3, 'La Delegation doit contenir au moins 3 caractères')
         .matches(/^[a-zA-Z0-9 ]+$/, 'Le nom ne doit contenir que des lettres et des chiffres'),

      preciseLocation: yup
         .string('le description ne doit contenir que des caractères')
         .required('Le location precis est requis')
         .max(50, 'Le description ne doit pas dépasser 50 caractères')
         .min(3, 'Le description doit contenir au moins 3 caractères')
         .matches(/^[a-zA-Z0-9,+\n ]+$/, 'Le nom ne doit contenir que des lettres et des chiffres'),

      description: yup
         .string('le description ne doit contenir que des caractères')
         .required('Le description est requis')
         .max(500, 'Le description ne doit pas dépasser 500 caractères')
         .min(10, 'Le description doit contenir au moins 10 caractères')
         .matches(/^[a-zA-Z0-9,+\n ]+$/, 'Le nom ne doit contenir que des lettres et des chiffres'),

      price: yup
         .number('le prix ne doit contenir que des chiffres')
         .min(50, 'le prix doit etre plus que 50')
         .required('Le location precis est requis')
         .positive('Le prix des chambres doit etre un chiffre positive')
         .max(10000000, 'le prix  ne doit pas dépasser 10000000'),

      roomsNumber: yup
         .number('le nombre des chambres ne doit contenir que des chiffres')
         .integer('le nombre des chambres doit etre un nombre réel')
         .required('Le nombre des chambres est requis')
         .max(10, 'Le nombre des chambres ne doit pas dépasser 10  chambre')
         .min(0, 'le nombre des chambres no doit etre un nombre négatif'),
   })

   /***********************    YUP INTEGRATION WITH REACT-HOOK-FORM       ***************/

   const form = useForm({
      resolver: yupResolver(schema),
   })

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
               accept="image/*"
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
