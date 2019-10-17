import React from 'react';
import { subDays, addDays, format } from 'date-fns';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { ptBR } from 'date-fns/esm/locale';

import styles from './styles';

function DateSwitch({ date, onDateChange }) {
  const onPrev = () => onDateChange(subDays(date, 1));
  const onNext = () => onDateChange(addDays(date, 1));

  const dateFormatted = format(date, `dd 'de' MMMM`, { locale: ptBR });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPrev}>
        <Icon
          name="chevron-left"
          size={styles.icon.size}
          color={styles.icon.color}
        />
      </TouchableOpacity>

      <Text style={styles.label}>{dateFormatted}</Text>

      <TouchableOpacity onPress={onNext}>
        <Icon
          name="chevron-right"
          size={styles.icon.size}
          color={styles.icon.color}
        />
      </TouchableOpacity>
    </View>
  );
}

export default DateSwitch;
