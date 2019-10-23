/* eslint-disable no-template-curly-in-string */

import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required('Informe o seu nome.'),

  email: Yup.string()
    .required('Informe o seu e-mail.')
    .email('Informe um e-mail válido.'),

  password: Yup.string()
    .required('Informe a sua senha.')
    .min(6, 'A senha deve conter no mínimo ${min} caracteres.'),
});

export default schema;
