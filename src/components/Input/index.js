import React, { forwardRef } from 'react';
import { View, TextInput } from 'react-native';

import styles from './styles';

function Input(props, ref) {
  const { style, containerStyle } = props;
  const inputStyle = [styles.input, style];
  const containerStyleF = [styles.container, containerStyle];

  return (
    <View style={containerStyleF}>
      <TextInput
        {...props}
        ref={ref}
        style={inputStyle}
        underlineColorAndroid="transparent"
        placeholderTextColor={styles.placeholder.color}
      />
    </View>
  );
}

export default forwardRef(Input);
