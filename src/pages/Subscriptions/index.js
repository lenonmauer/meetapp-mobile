import React, { useEffect, useState, useCallback } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  ActivityIndicator,
  Text,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Header from '~/components/Header';
import Meetup from '~/components/Meetup';
import Button from '~/components/Button';

import { SubscriptionActions } from '~/store/ducks/subscription';

import styles from './styles';

function Subscriptions() {
  const dispatch = useDispatch();
  const [refreshing] = useState(false);
  const initialCountRender = 7;

  const { loading, data: subscriptions, cancellingList } = useSelector(
    state => state.subscription,
  );
  const hasSubscriptions = subscriptions.length > 0;

  const fetchSubscriptions = useCallback(
    (count, shouldRefresh = true) => {
      dispatch(
        SubscriptionActions.getSubscriptionsRequest(
          initialCountRender,
          shouldRefresh,
        ),
      );
    },
    [dispatch],
  );

  useEffect(() => {
    fetchSubscriptions(initialCountRender);
  }, [fetchSubscriptions]);

  function handleEndReached(data) {
    if (!loading) {
      fetchSubscriptions(5, false);
    }
  }

  function handleRefresh() {
    fetchSubscriptions(initialCountRender);
  }

  function handlePressCancel(meetup) {
    dispatch(SubscriptionActions.deleteSubscriptionRequest(meetup.id));
  }

  function renderMeetupButton(meetup) {
    const cancelling = cancellingList.includes(meetup.id);

    return (
      <Button onPress={() => handlePressCancel(meetup)} loading={cancelling}>
        Cancelar inscrição
      </Button>
    );
  }

  function renderItem({ item }) {
    return <Meetup meetup={item} renderAction={renderMeetupButton} />;
  }

  const ListEmpty = (
    <View style={styles.emptyList.container}>
      <Text style={styles.emptyList.text}>Nenhuma inscrição encontrada.</Text>
    </View>
  );

  const LoadingSpinner = (
    <View style={styles.spinner.container}>
      <ActivityIndicator
        size={styles.spinner.size}
        color={styles.spinner.color}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.content}>
        {!loading && !hasSubscriptions && ListEmpty}

        {loading && !hasSubscriptions && LoadingSpinner}

        {hasSubscriptions && (
          <FlatList
            initialNumToRender={2}
            refreshing={refreshing}
            onRefresh={handleRefresh}
            data={subscriptions}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            onEndReached={handleEndReached}
            onEndReachedThreshold={0.1}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

export default Subscriptions;
