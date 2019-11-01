import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';

import styles from './styles';

function Button({
  children,
  theme,
  loading,
  disabled,
  onPress,
  testID = 'Button__touchable',
  style = {},
}) {
  const isDarkTheme = theme === 'dark';
  const buttonStyle = [
    styles.container,
    isDarkTheme && styles.themeDark.container,
    style,
  ];
  const labelStyle = [styles.label, isDarkTheme && styles.themeDark.label];

  return (
    <TouchableOpacity
      testID={testID}
      onPress={onPress}
      disabled={disabled || loading}
    >
      <View testID="container" style={buttonStyle}>
        {loading ? (
          <ActivityIndicator
            testID="Button__spinner"
            size={styles.spinner.size}
            color={styles.spinner.color}
          />
        ) : (
          <Text testID="Button__label" style={labelStyle}>
            {children}
          </Text>
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
