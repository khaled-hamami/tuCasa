import React, { useEffect } from 'react'
import getExpandedPost from '../../apis/getExpandedPost'

let postId
function ExpandedPost() {
   useEffect(() => {
      postId = window.location.pathname.substring(7)
      const ExpandedPostFetch = async () => {
         const post = await getExpandedPost(postId)
      }
   }, [])
   return <></>
}

export default ExpandedPost
