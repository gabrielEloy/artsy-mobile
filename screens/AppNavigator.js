import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Login from './Login';

const mainNavigation = createSwitchNavigator({
    Login
});

export default createAppContainer(mainNavigation);