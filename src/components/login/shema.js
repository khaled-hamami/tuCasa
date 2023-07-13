import * as yup from 'yup'

const schema = yup.object({
   email: yup
      .string('une adresse e-mail  ne doit contenir que des caractères')
      .required("L'adresse e-mail est requise")
      .matches(
         /^[a-zA-Z0-9.@]+$/,
         'une adresse email ne doit contenir que des lettres, des chiffres, des points, et un arobase'
      )
      .email('Adresse e-mail invalide'),
   password: yup
      .string('un mot de passe ne doit contenir que des caractères')
      .required('Le mot de passe est requis')
      .max(30, 'un mot de passe est composées au maximum du  30 caractères')
      .matches(
         /^[a-zA-Z0-9!#+*-_.]+$/,
         'un mot de passe ne doit contenir que des lettres, des chiffres et ( ! # + * _ -  . )'
      ),
})
export default schema
