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
      if (!respone.ok)
         throw new Error('Une erreur se produite lors de la connexion avec le serveur.')

      const data = await respone.json()

      if (!data) throw new Error("impossible de créer l'utilisateur.")

      console.log(data)
      location.replace('/login')
   } catch (err) {
      err.message == 'Failed to fetch' ? (err.message = 'Erreur inattendue') : null
      setErrorMessage(err.message)
      setOpen(true)
   }
   setFetching(false)
}

export default createUser
