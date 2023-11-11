import * as yup from 'yup'

const postSchema = yup.object({
   delegation: yup
      .string('la Delegation ne doit contenir que des caractères')
      .required('La Delegation est requis')
      .max(100, 'La Delegation ne doit pas dépasser 100 caractères')
      .min(3, 'La Delegation doit contenir au moins 3 caractères')
      .matches(/^[a-zA-Z0-9 'éèà]+$/, 'La Delegation ne doit contenir que des lettres et des chiffres'),

   preciseLocation: yup
      .string('le location ne doit contenir que des caractères')
      .required('Le location precis est requis')
      .max(50, 'Le location ne doit pas dépasser 50 caractères')
      .min(3, 'Le location doit contenir au moins 3 caractères')
      .matches(
         /^[a-zA-Z0-9,+\n 'éèà]+$/,
         'Le location ne doit contenir que des lettres et des chiffres'
      ),

   description: yup
      .string('le description ne doit contenir que des caractères')
      .required('Le description est requis')
      .max(500, 'Le description ne doit pas dépasser 500 caractères')
      .min(10, 'Le description doit contenir au moins 10 caractères')
      .matches(
         /^[a-zA-Z0-9,+\n 'éèà]+$/,
         'Le discription ne doit contenir que des lettres et des chiffres'
      ),

   price: yup
      .number('le prix ne doit contenir que des chiffres')
      .min(50, 'le prix doit etre plus que 50')
      .required('Le prix est requis')
      .positive('Le prix des chambres doit etre un chiffre positive')
      .max(10000000, 'le prix  ne doit pas dépasser 10000000'),

   roomsNumber: yup
      .number('le nombre des chambres ne doit contenir que des chiffres')
      .integer('le nombre des chambres doit etre un nombre réel')
      .required('Le nombre des chambres est requis')
      .max(10, 'Le nombre des chambres ne doit pas dépasser 10  chambre')
      .min(0, 'le nombre des chambres no doit etre un nombre négatif'),
})

export default postSchema
