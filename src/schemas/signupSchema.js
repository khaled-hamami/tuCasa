import * as yup from 'yup'

const singupSchema = yup.object({
   firstName: yup
      .string('le prénom ne doit contenir que des caractères')
      .required('Le prénom est requis')
      .matches(/^[a-zA-Z éèà]+$/, 'Le prénom ne doit contenir que des lettres ')
      .min(2, 'Le prénom doit contenir au moins 2 caractères')
      .max(20, 'Le prénom ne doit pas dépasser 20 caractères'),

   lastName: yup
      .string('le nom ne doit contenir que des caractères')
      .required('Le nom est requis')
      .matches(/^[a-zA-Z éèà]+$/, 'Le nom ne doit contenir que des lettres ')
      .min(2, 'Le nom doit contenir au moins 2 caractères')
      .max(20, 'Le nom ne doit pas dépasser 20 caractères'),

   email: yup
      .string("L'adresse e-mail  ne doit contenir que des caractères")
      .required("L'adresse e-mail est requise")
      .max(30, "L'adresse e-mail doit contenir au max 30 caractères")
      .min(3, "L'adresse e-mail doit contenir 3 ou plus caractères")
      .matches(
         /^[a-zA-Z0-9.@ éèà]+$/,
         "L'email ne doit contenir que des lettres, des chiffres, des points, et un arobase"
      )
      .email('Adresse e-mail invalide'),

   password: yup
      .string('le mot de passe ne doit contenir que des caractères')
      .required('Le mot de passe est requis')
      .min(6, 'Le mot de passe doit contenir au moins 6 caractères')
      .max(30, 'Le mot de passe doit contenir au max 30 caractères')
      .matches(
         /^[a-zA-Z0-9!#+*-_ éèà]+$/,
         'Le mot de passe ne doit contenir que des lettres, des chiffres, !, #, +, *, et -'
      ),
})

export default singupSchema
