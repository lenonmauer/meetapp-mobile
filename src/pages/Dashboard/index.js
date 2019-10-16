import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '~/components/Header';
import Button from '~/components/Button';

import styles from './styles';

const items = Array.from({ length: 10 }, (v, k) => ({
  id: k,
  label: `opaaaaaa${k}`,
}));

function Dashboard() {
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  function handleEndReached(info) {
    console.log(info);

    setLoadingMore(true);
    const offset = items.length;
    const limit = 5;
    console.log('handleEndReached');

    // load more
  }

  useEffect(() => {
    // load first meetups
  });

  const renderItem = ({ item }) => (
    <View style={styles.meetup.container}>
      <Image
        style={styles.meetup.image}
        source={{ uri: 'https://via.placeholder.com/500' }}
        resizeMode="cover"
      />

      <View style={styles.meetup.content.container}>
        <Text style={styles.meetup.title}>Meetup de React Native</Text>

        <View style={styles.meetup.content.wrapper}>
          <Icon
            name="calendar"
            size={styles.meetup.content.icon.size}
            color={styles.meetup.content.icon.color}
            style={styles.meetup.content.icon.style}
          />
          <Text style={styles.meetup.content.description}>
            24 de Junho, às 20h
          </Text>
        </View>

        <View style={styles.meetup.content.wrapper}>
          <Icon
            name="map"
            size={styles.meetup.content.icon.size}
            color={styles.meetup.content.icon.color}
            style={styles.meetup.content.icon.style}
          />
          <Text style={styles.meetup.content.description}>
            Rua Guilherme Gembala, 260
          </Text>
        </View>

        <View style={styles.meetup.content.wrapper}>
          <Icon
            name="account"
            size={styles.meetup.content.icon.size}
            color={styles.meetup.content.icon.color}
            style={styles.meetup.content.icon.style}
          />
          <Text style={styles.meetup.content.description}>
            Organizador: Lenon Mauer
          </Text>
        </View>

        <Button>Realizar inscrição</Button>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.content}>
        <View style={styles.dateSwitch.container}>
          <Icon
            name="chevron-left"
            size={styles.dateSwitch.icon.size}
            color={styles.dateSwitch.icon.color}
          />
          <Text style={styles.dateSwitch.label}>10 de Maio</Text>
          <Icon
            name="chevron-right"
            size={styles.dateSwitch.icon.size}
            color={styles.dateSwitch.icon.color}
          />
        </View>

        <FlatList
          refreshing={refreshing}
          data={items}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.3}
        />
      </View>
    </SafeAreaView>
  );
}

export default Dashboard;
