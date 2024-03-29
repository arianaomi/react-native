import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

//view
import AccountScreen from '../screens/Account'

const Stack = createStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Account'
        component={AccountScreen}
        options={{ title: '', headerTransparent: true }}
      />
    </Stack.Navigator>
  )
}