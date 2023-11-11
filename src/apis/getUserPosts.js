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

      if (!response.ok)
         throw new Error('Une erreur se produite lors de la connexion avec le serveur.')
      const data = await response.json()
      if (!data)
         throw new Error('Une erreur se produit lors du téléchargement des données du serveur.')
      return data
   } catch (err) {
      err.message == 'Failed to fetch' ? (err.message = 'Erreur inattendue') : null
      setErrorMessage(err.message)
      setOpen(true)
      return []
   }
}
export default getUserPosts
