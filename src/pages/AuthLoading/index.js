import React, { useEffect } from 'react';
import { SafeAreaView, ActivityIndicator } from 'react-native';

import SessionHelper from '~/util/session';

import styles from './styles';

function AuthLoading({ navigation }) {
  useEffect(() => {
    async function verifyToken() {
      const token = await SessionHelper.getToken();
      navigation.navigate({ routeName: token ? 'Dashboard' : 'SignIn' });
    }

    verifyToken();
  });

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="large" color={styles.spinner.color} />
    </SafeAreaView>
  );
}

export default AuthLoading;
