import React, { Fragment } from 'react';
import { SafeAreaView, Text, View, StatusBar } from 'react-native';

import styles from './styles';

function SignIn() {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text>SignUp</Text>
      </SafeAreaView>
    </Fragment>
  );
}

export default SignIn;
