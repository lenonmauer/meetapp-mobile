import ToastUtil from '~/util/toast';

const validate = async (schema, form) => {
  try {
    await schema.validate(form, { abortEarly: false });

    return true;
  } catch (err) {
    const error = err.errors[0];
    ToastUtil.show(error, 2000);
    return false;
  }
};

export default {
  validate,
};
