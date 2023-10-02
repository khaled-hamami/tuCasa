const getPosts = async (delegation, setErrorMessage, setOpen) => {
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
      setErrorMessage(err.message)
      setOpen(true)
      console.log(err)
      return []
   }
}
export default getPosts
