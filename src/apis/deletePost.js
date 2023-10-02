const deletePost = async (postId, setIsFetching, setErrorMessage, setOpen) => {
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
      location.reload()
   } catch (err) {
      console.log(err)
      setErrorMessage(err.message)
      setOpen(true)
      location.reload()
   }
   setIsFetching(false)
}
export default deletePost
