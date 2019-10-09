import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignUp from '~/pages/SignUp';
import SignIn from '~/pages/SignIn';

const navigator = createSwitchNavigator({ SignUp, SignIn });

export default createAppContainer(navigator);
