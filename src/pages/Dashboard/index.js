import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList } from 'react-native';

import Header from '~/components/Header';
import Meetup from '~/components/Meetup';
import DateSwitch from '~/components/DateSwitch';

import styles from './styles';

const items = Array.from({ length: 10 }, (v, k) => ({
  id: k,
  label: `opaaaaaa${k}`,
}));

function Dashboard() {
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [date, setDate] = useState(new Date());

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

  function renderItem({ item }) {
    return (
      <Meetup
        meetup={item}
        onPress={() => {}}
        actionLabel="Realizar inscrição"
      />
    );
  }

  function handleDateChange(newDate) {
    setDate(newDate);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.content}>
        <DateSwitch date={date} onDateChange={handleDateChange} />

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
