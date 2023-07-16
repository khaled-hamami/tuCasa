const deletePost = async (postId, setIsFetching) => {
   setIsFetching(true)
   try {
      const URL = import.meta.env.VITE_DELETE_POST
      const response = await fetch(URL, {
         method: 'DELETE',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ postId: postId }),
      })

      if (!response.ok) throw new Error()
      const data = await response.json()
      alert(data.message)
      location.reload()
   } catch (err) {
      alert(err)
      location.reload()
   }
   setIsFetching(false)
}
export default deletePost
