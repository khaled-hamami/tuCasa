const createPost = async (
   delegation,
   preciseLocation,
   description,
   price,
   roomsNumber,
   uploadedImages,
   setFetching,
   setErrorMessage,
   setOpen
) => {
   //a state to disable the submit button to prevent multiple requests
   setFetching(true)

   //the url where the signup request goes to
   const URL = import.meta.env.VITE_CREATE_POST_KEY

   try {
      const respone = await fetch(URL, {
         method: 'POST',
         headers: {
            'content-type': 'application/json',
         },
         body: JSON.stringify({
            delegation,
            preciseLocation,
            description,
            price,
            roomsNumber,
            uploadedImages,
            //to send the user id  created the post
            userId: localStorage.getItem('userId'),
         }),
      })

      if (!respone.ok) throw new Error('Impossible de créer la publication.! ')

      const data = await respone.json()
      console.log(data)
      location.reload()
   } catch (err) {
      setErrorMessage(err.message)
      setOpen(true)
      console.log(err)
      location.reload()
   }
   setFetching(false)
}

export default createPost
