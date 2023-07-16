const getUserPosts = async () => {
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
      alert(err)
      return []
   }
}
export default getUserPosts
