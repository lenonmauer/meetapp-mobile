import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';

import Logo from '~/components/Logo';
import Input from '~/components/Input';
import Button from '~/components/Button';

import NavigationService from '~/services/navigation';

import styles from './styles';

function SignIn() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <View style={styles.logoWrapper}>
          <Logo size={42} />
        </View>

        <Input containerStyle={styles.input} placeholder="Digite seu e-mail" />
        <Input containerStyle={styles.input} placeholder="Sua senha secreta" />
        <Button>Entrar</Button>

        <TouchableOpacity onPress={() => NavigationService.navigate('SignUp')}>
          <Text style={styles.linkSign}>Criar conta grátis</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default SignIn;
