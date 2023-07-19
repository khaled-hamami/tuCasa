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

      if (!response.ok) throw new Error('something went wrong')

      const data = await response.json()
      //set the userId in local storage for when posting to include  user id
      localStorage.setItem('userId', data.payload._id)
      //this flags the value in local storage when the user logges in
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
