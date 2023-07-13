const createPost = async (
   delegation,
   preciseLocation,
   description,
   price,
   roomsNumber,
   uploadedImages,
   setFetching
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
      location.reload()
      alert('Publication créée avec succès')
      console.log(respone)
      console.log(data)
   } catch (err) {
      location.reload()
      alert(err.message)
      console.log(err.message)
   }
   setFetching(false)
}

export default createPost
