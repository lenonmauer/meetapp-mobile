import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Header from '~/components/Header';
import Meetup from '~/components/Meetup';
import DateSwitch from '~/components/DateSwitch';

import { MeetupActions } from '~/store/ducks/meetup';

import styles from './styles';

function Dashboard() {
  const dispatch = useDispatch();
  const [refreshing] = useState(false);
  const [date, setDate] = useState(new Date());

  const { loading, data: meetups } = useSelector(state => state.meetup);

  useEffect(() => {
    dispatch(MeetupActions.getMeetupsRequest(10, true));
  }, [dispatch]);

  function handleEndReached() {
    dispatch(MeetupActions.getMeetupsRequest(5));
  }

  function handleRefresh() {
    dispatch(MeetupActions.getMeetupsRequest(10, true));
  }

  function handleDateChange(newDate) {
    setDate(newDate);
  }

  function renderItem({ item }) {
    return (
      <Meetup
        meetup={item}
        onPress={() => {}}
        actionLabel="Realizar inscrição"
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.content}>
        <DateSwitch date={date} onDateChange={handleDateChange} />

        {meetups.length > 0 && (
          <FlatList
            refreshing={refreshing}
            onRefresh={handleRefresh}
            data={meetups}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            onEndReached={handleEndReached}
            onEndReachedThreshold={0.3}
          />
        )}

        {loading && (
          <View>
            <ActivityIndicator size={48} color="white" />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

export default Dashboard;
