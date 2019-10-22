import React, { useEffect } from 'react';
import { SafeAreaView, ActivityIndicator, Text } from 'react-native';

import navigationService from '~/services/navigation';

import styles from './styles';

function AuthLoading() {
  useEffect(() => {
    setTimeout(() => {
      navigationService.navigate('Auth', { caralho: 1 });
    }, 1000);
  });

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="large" color={styles.spinner.color} />
    </SafeAreaView>
  );
}

export default AuthLoading;
