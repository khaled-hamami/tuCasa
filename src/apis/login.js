const login = async (email, password, setFetching) => {
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

      if (!response.ok) throw new Error('Email ou mot de passe incorrect')

      const data = await response.json()
      //set the userId in local storage for post user id utility
      localStorage.setItem('userId', data.payload._id)
      //the the flag that the user is logged in local storage
      localStorage.setItem('isLoggedIn', true)

      console.log(data)
      alert('Connexion réussie')
      location.replace('/')
   } catch (err) {
      console.log(err.message)
      alert(err.message)
      location.reload()
   }
   setFetching(false)
}
export default login
