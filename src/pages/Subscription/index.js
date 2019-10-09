import React, { Fragment } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import styles from './styles';

function Subscription() {
  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <Text>Subscription</Text>
      </SafeAreaView>
    </Fragment>
  );
}

export default Subscription;
