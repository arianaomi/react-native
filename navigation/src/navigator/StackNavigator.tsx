import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Page1Screen from '../screens/Page1Screen';
import Page2Screen from '../screens/Page2Screen';
import Page3Screen from '../screens/Page3Screen';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Page1Screen} />
      <Stack.Screen name="Details" component={Page2Screen} />
      <Stack.Screen name="Page3" component={Page3Screen} />
    </Stack.Navigator>
  );
};
