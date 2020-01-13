import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login';

const Stack = createStackNavigator();

function App() {
    const { Navigator, Screen } = Stack;
    return (
        <Navigator>
          <Screen name="OptionsPage" component={Login}/>
        </Navigator>
    );
}
