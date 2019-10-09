import React, { Fragment } from 'react';
import { SafeAreaView, Text, View, StatusBar } from 'react-native';

import styles from './styles';

function Subscription() {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text>Subscription</Text>
      </SafeAreaView>
    </Fragment>
  );
}

export default Subscription;
