import React, { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import Header from '~/components/Header';

import styles from './styles';

function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text>Profile</Text>
    </SafeAreaView>
  );
}

export default Profile;
