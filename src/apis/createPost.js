const createPost = async (
   delegation,
   preciseLocation,
   description,
   price,
   roomsNumber,
   uploadedImages
) => {
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
      console.log(uploadedImages)
      console.log(err)
      alert(err)
      // location.reload()
   }
}

export default createPost
