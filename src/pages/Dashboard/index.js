import React, { Fragment } from 'react';
import { SafeAreaView, Text, View, StatusBar } from 'react-native';

import styles from './styles';

function Dashboard() {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text>Dashboard</Text>
      </SafeAreaView>
    </Fragment>
  );
}

export default Dashboard;
