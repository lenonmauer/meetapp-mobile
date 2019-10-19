import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';

import Logo from '~/components/Logo';
import Input from '~/components/Input';
import Button from '~/components/Button';

import NavigationService from '~/services/navigation';

import styles from './styles';

function SignIn() {
  function handleFormikSubmit(values) {
    console.log(values);
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
          placeholder="Digite seu e-mail"
        />
        <Input
          onChangeText={handleChange('password')}
          value={values.email}
          containerStyle={styles.input}
          placeholder="Sua senha secreta"
        />
        <Button onPress={handleSubmit}>Entrar</Button>

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
