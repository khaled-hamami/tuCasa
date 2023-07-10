const createUser = async (firstName, lastName, email, password, setFetching) => {
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

      if (!respone.ok) throw new Error('could not create user! ')

      const data = await respone.json()

      if (!data) throw new Error()

      console.log(data)
      alert('User created successfully')
      window.location.replace('/login')
   } catch (err) {
      console.log(err.message)
      alert('erreur de connexion du serveur')
      //location.reload()
   }
   setFetching(false)
}

export default createUser
