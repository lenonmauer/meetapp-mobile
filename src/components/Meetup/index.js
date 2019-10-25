import React from 'react';
import { Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Button from '~/components/Button';

import styles from './styles';

function Meetup({ meetup, renderAction }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: meetup.thumb }}
        resizeMode="cover"
      />

      <View style={styles.content.container}>
        <Text style={styles.title}>{meetup.title}</Text>

        <View style={styles.content.wrapper}>
          <Icon
            name="calendar"
            size={styles.content.icon.size}
            color={styles.content.icon.color}
            style={styles.content.icon.style}
          />
          <Text style={styles.content.description}>{meetup.date}</Text>
        </View>

        <View style={styles.content.wrapper}>
          <Icon
            name="map-marker"
            size={styles.content.icon.size}
            color={styles.content.icon.color}
            style={styles.content.icon.style}
          />
          <Text style={styles.content.description}>{meetup.location}</Text>
        </View>

        <View style={styles.content.wrapper}>
          <Icon
            name="account"
            size={styles.content.icon.size}
            color={styles.content.icon.color}
            style={styles.content.icon.style}
          />
          <Text style={styles.content.description}>
            {`Organizador: ${meetup.user.name}`}
          </Text>
        </View>

        {renderAction(meetup)}
      </View>
    </View>
  );
}

export default Meetup;
