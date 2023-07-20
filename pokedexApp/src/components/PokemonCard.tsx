import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native'
import React from 'react'
import _ from 'lodash'
import { useNavigation } from '@react-navigation/native'

import getColorByPokemonType from '../utils/getColorByPokemonType'


export default function PokemonCard({ pokemon }) {
  const navigation = useNavigation();

  const goToPokemon = () => {
    navigation.navigate("Pokemon", { id: pokemon.id });
  }

  const pokemonColor = getColorByPokemonType(pokemon.type)

  const bgStyle = { backgroundColor: pokemonColor, ...styles.bgStyles }
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyle}>
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
            <Text style={styles.name}>{_.capitalize(pokemon.name)}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 100,
  },
  spacing: {
    flex: 1,
    padding: 5
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10
  },
  name: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  number: {
    color: '#FFF',
    fontSize: 10,
    position: 'absolute',
    right: 10,
    top: 6,
  },
  image: {
    bottom: 0,
    height: 70,
    position: 'absolute',
    right: 2,
    width: 80,
  },
})