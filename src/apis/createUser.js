const createUser = async (
   firstName,
   lastName,
   email,
   password,
   setFetching,
   setErrorMessage,
   setOpen
) => {
   //a state to disable the submit button to prevent multiple requests
   setFetching(true)

   //the url where the signup request goes to
   const URL = import.meta.env.VITE_SIGNUP_KEY

   try {
      const respone = await fetch(URL, {
         method: 'POST',
         headers: {
            'content-type': 'application/json',
         },
         body: JSON.stringify({ firstName, lastName, email, password }),
      })
      console.log(respone)
      if (!respone.ok) throw new Error('Could not create user! ')

      const data = await respone.json()

      if (!data) throw new Error()

      console.log(data)
      alert("L'utilisateur a été créé avec succès")
      window.location.replace('/login')
   } catch (err) {
      setErrorMessage(err.message)
      setOpen(true)
      console.log(err)
   }
   setFetching(false)
}

export default createUser
