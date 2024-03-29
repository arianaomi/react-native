import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

//navigation
import AccountNavigation from './AccountNavigation';
import FavoriteNavigation from './FavoriteNavigation';
import PokedexNavigation from './PokedexNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Favorite'
        component={FavoriteNavigation}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pokédex"
        component={PokedexNavigation}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => renderPokeball(),
          title: '', 
          headerTransparent: true 
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarLabel: 'Mi cuenta',
          tabBarIcon: ({ color, size }) => (
            <Icon 
            name='user' 
            color={color} 
            size={size} />
          )
        }}
      />

    </Tab.Navigator>
  );
}

function renderPokeball() {
  return <Image
    source={require('../assets/pokeball.png')}
    style={{ width: 75,  height: 75, top: -15 }}
  />

}