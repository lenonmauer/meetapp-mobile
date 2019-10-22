import React, { useEffect, useState, useRef, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContext } from 'react-navigation';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { Formik } from 'formik';

import Logo from '~/components/Logo';
import Input from '~/components/Input';
import Button from '~/components/Button';

import { AuthActions } from '~/store/ducks/auth';

import NavigationService from '~/services/navigation';
import Validator from '~/util/validator';
import schema from '~/schemas/signin';

import styles from './styles';

function SignIn() {
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const navigation = useContext(NavigationContext);

  console.tron.log('in app', navigation.state);

  async function handleFormikSubmit(values) {
    const isValid = await Validator.validate(schema, values);

    Keyboard.dismiss();

    if (!isValid) {
      // return;
    }

    dispatch(AuthActions.postSigninRequest(values));
  }

  function handleSubmitEmail() {
    passwordRef.current.focus();
  }

  function renderForm(props) {
    const { values, handleChange, handleSubmit } = props;

    return (
      <View style={styles.form}>
        <View style={styles.logoWrapper}>
          <Logo size={42} />
        </View>

        <Input
          onChangeText={handleChange('email')}
          value={values.email}
          containerStyle={styles.input}
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={handleSubmitEmail}
          placeholder="Digite seu e-mail"
        />

        <Input
          ref={passwordRef}
          onChangeText={handleChange('password')}
          value={values.password}
          containerStyle={styles.input}
          secureTextEntry
          returnKeyType="done"
          placeholder="Sua senha secreta"
          onSubmitEditing={handleSubmit}
        />

        <Button loading={loading} onPress={handleSubmit}>
          Entrar
        </Button>

        <TouchableOpacity onPress={() => NavigationService.navigate('SignUp')}>
          <Text style={styles.linkSign}>Criar conta grátis</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleFormikSubmit}
      >
        {props => renderForm(props)}
      </Formik>
    </SafeAreaView>
  );
}

export default SignIn;
