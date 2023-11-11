const deletePost = async (postId, setIsFetching, setErrorMessage, setOpen) => {
   setIsFetching(true)
   try {
      const URL = import.meta.env.VITE_DELETE_POST
      const response = await fetch(URL, {
         method: 'DELETE',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ postId: postId }),
      })

      if (!response.ok)
      throw new Error('Une erreur se produite lors de la connexion avec le serveur.')

      location.reload()
   } catch (err) {
      err.message == 'Failed to fetch' ? (err.message = 'Erreur inattendue') : null
      setErrorMessage(err.message)
      setOpen(true)
      location.reload()
   }
   setIsFetching(false)
}
export default deletePost
