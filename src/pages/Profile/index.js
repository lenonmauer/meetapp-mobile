import React, { Fragment } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import styles from './styles';

function Profile() {
  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <Text>Profile</Text>
      </SafeAreaView>
    </Fragment>
  );
}

export default Profile;
