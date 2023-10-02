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

      const data = await response.json()
      if (!response.ok) throw new Error(data.error)
      //set the userId in local storage for when posting to include  user id
      localStorage.setItem('userId', data.payload._id)

      //this flags the value in local storage when the user logges in
      localStorage.setItem('isLoggedIn', true)
      //set first name and last name
      localStorage.setItem('userFirstName', data.payload.firstName)
      localStorage.setItem('userLastName', data.payload.lastName)

      console.log(data)
      location.replace('/')
   } catch (err) {
      setErrorMessage(err.message)
      setOpen(true)
      console.log(err)
   }
   setFetching(false)
}
export default login
