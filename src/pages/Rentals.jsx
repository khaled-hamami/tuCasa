import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { useAtom } from 'jotai'
import CityList, { delegation } from '../components/city list/CityList'
import MobileDrawer from '../components/mobile drawer/mobileDrawer'
import MinimizedPost from '../components/Posts/MinimizedPost'
import AddButton from '../components/add post/AddButton'
import AddPost from '../components/add post/AddPost'
import getPosts from '../apis/getPosts'

function Rentals() {
   //the selected state from the list passed by jotai global state ('useatom')
   const [selectedDelegation] = useAtom(delegation)
   const [posts, setPosts] = useState([])

   //runs as soon as page loads or or selected delegation changes  to retrieve the posts

   useEffect(() => {
      const fetchData = async () => {
         setPosts(await getPosts(selectedDelegation))
      }
      fetchData()
   }, [selectedDelegation])

   //controle the add post popup
   const [addPostDisplay, setAddPostDisplay] = useState(false)

   //the componnet
   return (
      <Box sx={{ display: 'flex', height: '100%', width: '100%', backgroundColor: 'primary.main' }}>
         <AddPost display={addPostDisplay} setAddPostDisplay={setAddPostDisplay} />
         <MobileDrawer setAddPostDisplay={setAddPostDisplay} />
         <CityList />
         <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-evenly"
            sx={{ marginLeft: { md: '300px' } }}
            width="100%"
         >
            <Typography
               variant="h5"
               sx={{
                  display: { xs: 'none', md: 'flex' },
                  alignItems: 'center',
                  letterSpacing: '-1.2px',
                  color: 'secondary.light',
                  position: 'fixed',
                  zIndex: '0',
                  borderRadius: '10px',
                  textAlign: 'center',
                  bgcolor: 'primary.dark',
                  p: '5px 0',
                  justifyContent: { xs: 'space-between', md: 'space-around' },
                  fontSize: { xs: '1rem', sm: '1.3rem', md: '1.5rem' },
                  width: { xs: '70%', sm: '80%', md: '90%' },
               }}
            >
               {selectedDelegation}
               <AddButton setAddPostDisplay={setAddPostDisplay} />
            </Typography>
            {posts.length > 0 ? (
               posts.map((post) => {
                  return (
                     <MinimizedPost
                        key={post._id}
                        id={post._id}
                        location={post.preciseLocation}
                        price={post.price}
                        images={post.uploadedImages}
                        edit={false}
                     />
                  )
               })
            ) : (
               <Typography mt="25vw" variant="h4" color="secondary.main">
                  aucune publication
               </Typography>
            )}
         </Box>
      </Box>
   )
}
export default Rentals
