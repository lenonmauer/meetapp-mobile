import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

function Button({ children }) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.label}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
