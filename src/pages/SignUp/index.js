import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';

import Logo from '~/components/Logo';
import Input from '~/components/Input';
import Button from '~/components/Button';

import NavigationService from '~/services/navigation';

import styles from './styles';

function SignUp({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <View style={styles.logoWrapper}>
          <Logo size={42} />
        </View>

        <Input containerStyle={styles.input} placeholder="Nome completo" />
        <Input containerStyle={styles.input} placeholder="Digite seu e-mail" />
        <Input containerStyle={styles.input} placeholder="Sua senha secreta" />
        <Button>Entrar</Button>

        <TouchableOpacity onPress={() => NavigationService.navigate('SignIn')}>
          <Text style={styles.linkSign}>Já tenho login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default SignUp;
