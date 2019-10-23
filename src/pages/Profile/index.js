import React, { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Header from '~/components/Header';
import Input from '~/components/Input';
import Button from '~/components/Button';
import Divider from '~/components/Divider';

import { ProfileActions } from '~/store/ducks/profile';
import { AuthActions } from '~/store/ducks/auth';

import styles from './styles';

function Profile() {
  const dispatch = useDispatch();
  console.log('Profile');
  /*
  name
email
old_password
password
password_confirmation
*/

  function handlePressLogout() {
    dispatch(AuthActions.logout());
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.form}>
        <Input containerStyle={styles.marginBottom} placeholder="Seu nome" />

        <Input containerStyle={styles.marginBottom} placeholder="Seu e-mail" />

        <Divider />

        <Input containerStyle={styles.marginBottom} placeholder="Senha atual" />
        <Input containerStyle={styles.marginBottom} placeholder="Nova senha" />
        <Input
          containerStyle={styles.marginBottom}
          placeholder="Confirmação de senha"
        />

        <Button style={styles.marginBottom}>Salvar perfil</Button>

        <Button theme="dark" onPress={handlePressLogout}>
          Sair do Meetapp
        </Button>
      </View>
    </SafeAreaView>
  );
}

export default Profile;
