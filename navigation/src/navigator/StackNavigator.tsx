import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Page1Screen from '../screens/Page1Screen';
import Page2Screen from '../screens/Page2Screen';
import Page3Screen from '../screens/Page3Screen';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen
        name="Home"
        component={Page1Screen}
        options={{title: 'Page 1'}}
      />
      <Stack.Screen
        name="Details"
        component={Page2Screen}
        options={{title: 'Page 2'}}
      />
      <Stack.Screen
        name="Page3"
        component={Page3Screen}
        options={{title: 'Page 3'}}
      />
    </Stack.Navigator>
  );
};
