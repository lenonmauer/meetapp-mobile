import React, { useEffect } from 'react';
import { SafeAreaView, ActivityIndicator, Text } from 'react-native';

import navigationService from '~/services/navigation';

import styles from './styles';

function AuthLoading() {
  useEffect(() => {
    setTimeout(() => {
      navigationService.navigate('SignIn');
    }, 1000);
  });

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="large" color={styles.spinner.color} />
    </SafeAreaView>
  );
}

export default AuthLoading;
