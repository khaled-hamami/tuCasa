const login = async (email, password, setFetching, setErrorMessage, setOpen) => {
   setFetching(true)

   const URL = import.meta.env.VITE_LOGIN_KEY

   try {
      const response = await fetch(URL, {
         method: 'POST',
         headers: {
            'content-type': 'application/json',
         },
         body: JSON.stringify({
            email,
            password,
         }),
      })
      if (!response.ok) throw new Error(await response.json())

      const data = await response.json()
      if (!data.payload || !data.payload._id)
         throw new Error('Une erreur se produite lors de la connexion avec le serveur.')

      localStorage.setItem('userId', data.payload._id)
      localStorage.setItem('isLoggedIn', true)
      localStorage.setItem('userFirstName', data.payload.firstName)
      localStorage.setItem('userLastName', data.payload.lastName)

      location.replace('/')
   } catch (err) {
      err.message == 'Failed to fetch' ? (err.message = 'Erreur inattendue') : null
      setErrorMessage(err.message || 'Erreur inattendue')
      setOpen(true)
   } finally {
      setFetching(false)
   }
}
export default login
