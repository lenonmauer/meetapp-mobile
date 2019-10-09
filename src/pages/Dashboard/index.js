import React, { Fragment } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import styles from './styles';

function Dashboard() {
  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <Text>Dashboard</Text>
      </SafeAreaView>
    </Fragment>
  );
}

export default Dashboard;
