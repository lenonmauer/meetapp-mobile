import React, { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import Header from '~/components/Header';

import styles from './styles';

function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text>Dashboard</Text>
    </SafeAreaView>
  );
}

export default Dashboard;
