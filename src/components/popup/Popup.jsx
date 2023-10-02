import { Alert, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
export default function Popup({ setOpen, err }) {
   return (
      <Alert
         severity="error"
         action={
            <IconButton
               aria-label="close"
               color="inherit"
               size="small"
               onClick={() => {
                  setOpen(false)
               }}
            >
               <CloseIcon fontSize="inherit" />
            </IconButton>
         }
         sx={{ my: 10, width: '100%' }}
      >
         {err || 'Error'}
      </Alert>
   )
}
