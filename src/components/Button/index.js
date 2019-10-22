import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';

import styles from './styles';

function Button({ children, theme, loading, onPress, style = {} }) {
  const isDarkTheme = theme === 'dark';
  const buttonStyle = [
    styles.container,
    isDarkTheme && styles.themeDark.container,
    style,
  ];
  const labelStyle = [styles.label, isDarkTheme && styles.themeDark.label];

  return (
    <TouchableOpacity onPress={onPress} disabled={loading}>
      <View style={buttonStyle}>
        {loading ? (
          <ActivityIndicator
            size={styles.spinner.size}
            color={styles.spinner.color}
          />
        ) : (
          <Text style={labelStyle}>{children}</Text>
        )}
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
