import React, { useEffect } from 'react'
import { useAtom, useSetAtom } from 'jotai'
import { Box, Typography } from '@mui/material'
import { LoggedIn } from '../App'
import MinimizedPost from '../components/Posts/MinimizedPost'
import getUserPosts from '../apis/getUserPosts'
import { useState } from 'react'
import Popup from '../components/popup/Popup'

function Profile() {
   const [postsFetched, setPostsFetched] = useState(false)
   const [isLoggedIn] = useAtom(LoggedIn)
   const [userPosts, setUserPosts] = useState([])
   const [errMessage, setErrorMessage] = useState('error')
   //error popup
   const [open, setOpen] = useState(false)

   //runs as soon as page loads to retrieve the posts
   useEffect(() => {
      if (isLoggedIn) {
         const fetchData = async () => {
            setUserPosts(await getUserPosts(setErrorMessage, setOpen))
            setPostsFetched(true)
         }
         fetchData()
      }
   }, [])

   const firstName = localStorage.getItem('userFirstName')
   const lastName = localStorage.getItem('userLastName')

   //check if the posts are fetched to not display 'no posts' white the async function is fetching
   const CheckPostsFetched = () => {
      if (postsFetched && userPosts.length === 0) return 'Aucune publications'
      return 'Téléchargement des publications...'
   }

   return isLoggedIn ? (
      <Box
         sx={{
            height: '100%',
            width: '100%',
            backgroundColor: 'primary.main',
            display: 'flex',
            flexDirection: 'column',
            gap: '25px',
         }}
      >
         {open && <Popup setOpen={setOpen} err={errMessage} />}
         <Box display="flex">
            <Typography m="20px" variant="h3" color="secondary.dark">
               {firstName}&nbsp;{lastName}
            </Typography>
         </Box>
         <Typography
            variant="h5"
            sx={{
               m: '20px',
               color: 'secondary.main',
            }}
         >
            Votre Publications
         </Typography>

         <Box>
            {userPosts.length > 0 ? (
               userPosts.map((post) => {
                  return (
                     <MinimizedPost
                        key={post._id}
                        id={post._id}
                        location={post.preciseLocation}
                        price={post.price}
                        images={post.uploadedImages}
                        edit={isLoggedIn}
                     />
                  )
               })
            ) : (
               <Typography
                  component="center"
                  mx="15vw"
                  variant="h6"
                  whiteSpace="nowrap"
                  color="secondary.main"
               >
                  {CheckPostsFetched()}
               </Typography>
            )}
         </Box>
      </Box>
   ) : (
      <Typography variant="h4" color="secondary.main" fontWeight="bolder" padding="25px">
         Vous devez connecter pour voir cette page
      </Typography>
   )
}

export default Profile
