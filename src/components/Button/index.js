import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

function Button({ children, theme }) {
  const isDakTheme = theme === 'dark';

  return (
    <TouchableOpacity>
      <View style={[styles.container, isDakTheme && styles.themeDark]}>
        <Text style={styles.label}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  theme: PropTypes.string,
};

Button.defaultProps = {
  theme: null,
};

export default Button;
