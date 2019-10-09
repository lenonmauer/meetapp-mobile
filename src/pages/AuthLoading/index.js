import React, { Fragment } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import styles from './styles';

function AuthLoading() {
  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <Text>Loading...</Text>
      </SafeAreaView>
    </Fragment>
  );
}

export default AuthLoading;
