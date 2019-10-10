import React, { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import Logo from '~/components/Logo';
import Input from '~/components/Input';
import Button from '~/components/Button';

import styles from './styles';

function SignIn() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <View style={styles.logoWrapper}>
          <Logo size={42} />
        </View>

        <Input placeholder="Digite seu e-mail" />
        <Input placeholder="Sua senha secreta" />
        <Button>Entrar</Button>

        <Text style={styles.linkSignup}>Criar conta grátis</Text>
      </View>
    </SafeAreaView>
  );
}

export default SignIn;
