import React, { Fragment } from 'react';
import { SafeAreaView, Text, View, StatusBar } from 'react-native';

import styles from './styles';

function SignUp() {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text>SignUp</Text>
      </SafeAreaView>
    </Fragment>
  );
}

export default SignUp;
