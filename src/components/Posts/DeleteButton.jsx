import React, { useState } from 'react'
import { CustomMuiButton } from './EditButton'
import deletePost from '../../apis/deletePost'
import Popup from '../popup/Popup'

function DeleteButton({ id }) {
   const [isfetching, setIsFetching] = useState(false)
   const [errMessage, setErrorMessage] = useState('error')
   //error popup
   const [open, setOpen] = useState(false)
   return (
      <>
         {open && <Popup setOpen={setOpen} err={errMessage} />}
         <CustomMuiButton
            variant="contained"
            disabled={isfetching}
            onClick={() => deletePost(id, setIsFetching, setErrorMessage, setOpen)}
         >
            Supprimer
         </CustomMuiButton>
      </>
   )
}

export default DeleteButton
