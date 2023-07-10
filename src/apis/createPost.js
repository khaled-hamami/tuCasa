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
         }),
      })

      if (!respone.ok) throw new Error('could not create post! ')

      const data = await respone.json()

      if (!data) throw new Error()

      console.log(data)
      alert('post created successfully')
      window.location.reload()
   } catch (err) {
      console.log(err.message)
      alert('erreur de connexion du serveur')
      // location.reload()
   }
   setFetching(false)
}

export default createPost
