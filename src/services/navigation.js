import { NavigationActions } from 'react-navigation';

let navigation = null;

function setNavigator(ref) {
  navigation = ref;
}

function goBack() {
  return navigation.dispatch(NavigationActions.goBack());
}

function navigate(routeName, params) {
  return navigation.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

export default {
  setNavigator,
  goBack,
  navigate,
};
