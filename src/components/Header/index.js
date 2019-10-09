import React from 'react';
import { View } from 'react-native';

import Logo from '~/components/Logo';

import styles from './styles';

function Header() {
  return (
    <View style={styles.container}>
      <Logo size={styles.logo.size} />
    </View>
  );
}

export default Header;
