import React from 'react'
import { useAtom } from 'jotai'
import { Box, Typography } from '@mui/material'
import { GlobalUserInfo, LoggedIn } from '../App'
import MinimizedPost from '../components/Posts/MinimizedPost'

function Profile() {
   const [userInfo, setUserInfo] = useAtom(GlobalUserInfo)
   const [isLoggedIn, setIsLoggedIn] = useAtom(LoggedIn)

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
               {userInfo && userInfo.firstName}
               &nbsp;
               {userInfo && userInfo.lastName}
            </Typography>
         </Box>
         <Typography>Votre Posts</Typography>

         <Box>
            <MinimizedPost
               id=""
               location="el fahs"
               price="400"
               images={['img1', 'img2', 'img3', 'img4']}
               edit={true}
            />
            <MinimizedPost
               id=""
               location="el fahs"
               price="400"
               images={['img1', 'img2', 'img3', 'img4']}
               edit={true}
            />
            <MinimizedPost
               id=""
               location="el fahs"
               price="400"
               images={['img1', 'img2', 'img3', 'img4']}
               edit={true}
            />
            <MinimizedPost
               id=""
               location="el fahs"
               price="400"
               images={['img1', 'img2', 'img3', 'img4']}
               edit={true}
            />
         </Box>
      </Box>
   ) : (
      <Typography variant="h4" p="20px" color="secondary.main" fontWeight="bolder" padding="25px">
         Vous devez connecter pour voir cette page
      </Typography>
   )
}

export default Profile
