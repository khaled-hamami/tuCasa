import React, { useState } from 'react'
import { CustomMuiButton } from './EditButton'
import deletePost from '../../apis/deletePost'

function DeleteButton({ id }) {
   const [isfetching, setIsFetching] = useState(false)
   return (
      <CustomMuiButton
         variant="contained"
         disabled={isfetching}
         onClick={() => deletePost(id, setIsFetching)}
      >
         Supprimer
      </CustomMuiButton>
   )
}

export default DeleteButton
