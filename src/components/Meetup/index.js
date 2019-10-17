import React from 'react';
import { Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Button from '~/components/Button';

import styles from './styles';

function Meetup({ meetup, onPress, actionLabel }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: 'https://via.placeholder.com/500' }}
        resizeMode="cover"
      />

      <View style={styles.content.container}>
        <Text style={styles.title}>Meetup de React Native</Text>

        <View style={styles.content.wrapper}>
          <Icon
            name="calendar"
            size={styles.content.icon.size}
            color={styles.content.icon.color}
            style={styles.content.icon.style}
          />
          <Text style={styles.content.description}>24 de Junho, às 20h</Text>
        </View>

        <View style={styles.content.wrapper}>
          <Icon
            name="map-marker"
            size={styles.content.icon.size}
            color={styles.content.icon.color}
            style={styles.content.icon.style}
          />
          <Text style={styles.content.description}>
            Rua Guilherme Gembala, 260
          </Text>
        </View>

        <View style={styles.content.wrapper}>
          <Icon
            name="account"
            size={styles.content.icon.size}
            color={styles.content.icon.color}
            style={styles.content.icon.style}
          />
          <Text style={styles.content.description}>
            Organizador: Lenon Mauer
          </Text>
        </View>

        <Button onPress={onPress}>{actionLabel}</Button>
      </View>
    </View>
  );
}

export default Meetup;
