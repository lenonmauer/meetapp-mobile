/* eslint-disable no-template-curly-in-string */

import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required('Informe o seu nome.'),

  email: Yup.string()
    .required('Informe o seu e-mail.')
    .email(),

  old_password: Yup.string().required('Informe a sua senha antiga.'),

  password: Yup.string()
    .required('Informe a sua nova senha.')
    .min(6, 'A senha deve conter no mínimo ${min} caracteres.'),

  password_confirmation: Yup.string()
    .required('Confirme a sua senha.')
    .oneOf([Yup.ref('password'), null], 'As senhas não coincidem.'),
});

export default schema;
