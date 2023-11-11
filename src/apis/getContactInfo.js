const URL = import.meta.env.VITE_GET_CONTACT
const getContactInfo = async (id, setResult, setOpen) => {
   console.log(URL)
   try {
      const response = await fetch(URL, {
         method: 'POST',
         headers: { 'content-type': 'application/json' },
         body: JSON.stringify({ id: id }),
      })
      if (!response.ok)
         throw new Error('Une erreur se produite lors de la connexion avec le serveur.')
      const data = await response.json()
      if (!data)
         throw new Error('Une erreur se produit lors du téléchargement des information du contact.')
      console.log(data)
      setOpen(true)
      setResult(data)
   } catch (err) {
      setOpen(true)
      err.message == 'Failed to fetch' ? (err.message = 'Erreur inattendue') : null
      setResult(err.message)
   }
}

export default getContactInfo
