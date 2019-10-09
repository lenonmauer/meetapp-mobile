import React, { Fragment } from 'react';
import { SafeAreaView, Text, View, StatusBar } from 'react-native';

import styles from './styles';

function Profile() {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text>Profile</Text>
      </SafeAreaView>
    </Fragment>
  );
}

export default Profile;
