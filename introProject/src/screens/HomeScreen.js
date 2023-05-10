import { View, Text, Button } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  const goToSettings = () => navigation.navigate('Settings')
  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Button onPress={goToSettings} title='Ir a ajustes' />
    </View>
  )
}