import React from 'react';
import { View, TextInput } from 'react-native';

import styles from './styles';

function Input(props) {
  const { containerStyle, style } = props;
  const finalStyle = [styles.input, style];

  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        {...props}
        style={finalStyle}
        placeholderTextColor={styles.placeholder.color}
      />
    </View>
  );
}

export default Input;
