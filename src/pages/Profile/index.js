import React, { useEffect, useRef } from 'react';
import { SafeAreaView, Keyboard, View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';

import Header from '~/components/Header';
import Input from '~/components/Input';
import Button from '~/components/Button';
import Divider from '~/components/Divider';

import { ProfileActions } from '~/store/ducks/profile';
import { AuthActions } from '~/store/ducks/auth';

import Validator from '~/util/validator';
import schema from '~/schemas/profile';

import styles from './styles';

function Profile() {
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const emailRef = useRef(null);
  const oldPasswordRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);

  const { loading, data: profile } = useSelector(state => state.profile);

  const isProfileEmpty = !profile || !profile.email;

  const formInitialValues = {
    name: profile.name,
    email: profile.email,
    old_password: '',
    password: '',
    password_confirmation: '',
  };

  useEffect(() => {
    dispatch(ProfileActions.getProfileRequest());
  }, [dispatch]);

  async function handleFormikSubmit(values) {
    const isValid = await Validator.validate(schema, values);

    Keyboard.dismiss();

    if (!isValid) {
      return;
    }

    dispatch(ProfileActions.putProfileRequest(values, resetForm));
  }

  function handlePressLogout() {
    dispatch(AuthActions.logout());
  }

  function resetForm() {
    formRef.current.resetForm();
  }

  function renderForm(props) {
    const { values, handleChange, handleSubmit } = props;

    return (
      <View style={styles.form}>
        <Input
          onChangeText={handleChange('name')}
          value={values.name}
          containerStyle={styles.marginBottom}
          placeholder="Seu nome"
          onSubmitEditing={() => emailRef.current.focus()}
          returnKeyType="next"
        />

        <Input
          ref={emailRef}
          onChangeText={handleChange('email')}
          value={values.email}
          onSubmitEditing={() => oldPasswordRef.current.focus()}
          returnKeyType="next"
          containerStyle={styles.marginBottom}
          placeholder="Seu e-mail"
        />

        <Divider />

        <Input
          ref={oldPasswordRef}
          onChangeText={handleChange('old_password')}
          secureTextEntry
          value={values.old_password}
          onSubmitEditing={() => passwordRef.current.focus()}
          returnKeyType="next"
          containerStyle={styles.marginBottom}
          placeholder="Senha atual"
        />

        <Input
          ref={passwordRef}
          onChangeText={handleChange('password')}
          value={values.password}
          secureTextEntry
          onSubmitEditing={() => passwordConfirmRef.current.focus()}
          returnKeyType="next"
          containerStyle={styles.marginBottom}
          placeholder="Nova senha"
        />

        <Input
          ref={passwordConfirmRef}
          onChangeText={handleChange('password_confirmation')}
          value={values.password_confirmation}
          secureTextEntry
          onSubmitEditing={handleSubmit}
          returnKeyType="done"
          containerStyle={styles.marginBottom}
          placeholder="Confirmação de senha"
        />

        <Button
          style={styles.marginBottom}
          onPress={handleSubmit}
          loading={loading}
        >
          Salvar perfil
        </Button>

        <Button theme="dark" onPress={handlePressLogout}>
          Sair do Meetapp
        </Button>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      {isProfileEmpty ? (
        <View style={styles.spinner.container}>
          <ActivityIndicator
            size={styles.spinner.size}
            color={styles.spinner.color}
          />
        </View>
      ) : (
        <Formik
          ref={formRef}
          initialValues={formInitialValues}
          onSubmit={handleFormikSubmit}
        >
          {props => renderForm(props)}
        </Formik>
      )}
    </SafeAreaView>
  );
}

export default Profile;
