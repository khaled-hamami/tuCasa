const getUserPosts = async (setErrorMessage, setOpen) => {
   const userId = localStorage.getItem('userId')
   const URL = import.meta.env.VITE_FETCH_USER_POSTS
   try {
      const response = await fetch(URL, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            userId: `${userId}`,
         }),
      })

      if (!response.ok) throw new Error('Unable to get posts')

      const data = await response.json()
      if (data) return data
   } catch (err) {
      console.log(err)
      setErrorMessage(err.message)
      setOpen(true)
      return []
   }
}
export default getUserPosts
