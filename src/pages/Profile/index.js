import React, { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import Header from '~/components/Header';
import Input from '~/components/Input';
import Button from '~/components/Button';
import Divider from '~/components/Divider';

import styles from './styles';

function Profile() {
  return (
    <View style={styles.container}>
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

        <Button theme="dark">Sair do Meetapp</Button>
      </View>
    </View>
  );
}

export default Profile;
