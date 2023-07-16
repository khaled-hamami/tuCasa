import React, { useEffect } from 'react'
import { useAtom } from 'jotai'
import { Box, Typography } from '@mui/material'
import { LoggedIn } from '../App'
import MinimizedPost from '../components/Posts/MinimizedPost'
import getUserPosts from '../apis/getUserPosts'
import { useState } from 'react'

function Profile() {
   const [isLoggedIn] = useAtom(LoggedIn)
   const [userPosts, setUserPosts] = useState([])

   //runs as soon as page loads to retrieve the posts

   useEffect(() => {
      if (isLoggedIn) {
         const fetchData = async () => {
            setUserPosts(await getUserPosts())
         }
         fetchData()
      }
   }, [])

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
         <Box display="flex">
            <Typography variant="h3" color="secondary.dark">
               khaled &nbsp; hammami
            </Typography>
         </Box>
         <Typography>Votre Posts</Typography>

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
               <Typography m="15vw 50%" variant="h4" whiteSpace="nowrap" color="secondary.main">
                  no posts
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
