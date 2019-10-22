import ToastService from '~/services/toast';

const validate = async (schema, form) => {
  try {
    await schema.validate(form, { abortEarly: false });

    return true;
  } catch (err) {
    const error = err.errors[0];
    ToastService.show(error, 2000);
    return false;
  }
};

export default {
  validate,
};
