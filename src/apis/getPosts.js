const getPosts = async (delegation) => {
   const URL = import.meta.env.VITE_FETCH_POSTS
   try {
      const response = await fetch(URL, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            delegation: `${delegation}`,
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
export default getPosts
