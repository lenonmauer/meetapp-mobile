import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Header from '~/components/Header';
import Meetup from '~/components/Meetup';
import DateSwitch from '~/components/DateSwitch';
import Button from '~/components/Button';

import { MeetupActions } from '~/store/ducks/meetup';
import { SubscriptionActions } from '~/store/ducks/subscription';

import styles from './styles';

function Dashboard() {
  const dispatch = useDispatch();
  const [refreshing] = useState(false);
  const [date, setDate] = useState(new Date());

  const { loading, data: meetups } = useSelector(state => state.meetup);

  useEffect(() => {
    dispatch(MeetupActions.getMeetupsRequest(date, 10, true));
  }, [date, dispatch]);

  function handleEndReached(data) {
    if (!loading) {
      dispatch(MeetupActions.getMeetupsRequest(date, 5));
    }
  }

  function handleRefresh() {
    dispatch(MeetupActions.getMeetupsRequest(date, 10, true));
  }

  function handleDateChange(newDate) {
    setDate(newDate);
  }

  function handlePressSubscribe(meetup) {
    dispatch(SubscriptionActions.postSubscribeRequest(meetup.id));
  }

  function renderMeetupButton(meetup) {
    const { subscribing, subscribed } = meetup;

    return (
      <Button
        onPress={() => handlePressSubscribe(meetup)}
        loading={subscribing}
        disabled={subscribed}
      >
        {subscribed ? 'Inscrito' : 'Realizar inscrição'}
      </Button>
    );
  }

  function renderItem({ item }) {
    return <Meetup meetup={item} renderAction={renderMeetupButton} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.content}>
        <DateSwitch date={date} onDateChange={handleDateChange} />

        {meetups.length > 0 && (
          <FlatList
            initialNumToRender={2}
            refreshing={refreshing}
            onRefresh={handleRefresh}
            data={meetups}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            onEndReached={handleEndReached}
            onEndReachedThreshold={0.1}
          />
        )}

        {loading && meetups.length === 0 && (
          <View style={styles.spinner.container}>
            <ActivityIndicator
              size={styles.spinner.size}
              color={styles.spinner.color}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

export default Dashboard;
