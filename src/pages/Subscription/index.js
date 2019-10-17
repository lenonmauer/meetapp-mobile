import React, { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import Header from '~/components/Header';

import styles from './styles';

function Subscription() {
  console.log('Subscription');

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text>Subscription</Text>
    </SafeAreaView>
  );
}

export default Subscription;
