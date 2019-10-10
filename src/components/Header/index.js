import React from 'react';
import { View } from 'react-native';

import Logo from '~/components/Logo';

import styles from './styles';

function Header() {
  return (
    <View style={styles.container}>
      <Logo size={24} />
    </View>
  );
}

export default Header;
