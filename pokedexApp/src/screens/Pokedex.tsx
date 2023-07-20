import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'

import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../api/pokemon'

import PokemonList from '../components/PokemonList'

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([])
  const [nextUrl, setNextUrl]= useState(null)
  useEffect(() => {
    /*()() -> funcion anonima autoejecutable,
     ya que en un useEffect no podemos usar async-await
     */
    (async () => {
      await loadPokemons()
    })()
  }, [])

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl)
      setNextUrl(response.next)
      const pokemonsArray = []

      /*Crearemos un bucle asyncrono
      Realmente para trabajar con bucles asíncronos es una mejor 
      práctica y ayuda en performance hacer un for of, que usar un map
      */
      for await (const pokemon of response.results) {
       const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url)
       
       pokemonsArray.push({
        id: pokemonDetails?.id,
        name: pokemonDetails?.name,
        type: pokemonDetails?.types[0]?.type.name,
        order: pokemonDetails?.order,
        image: pokemonDetails?.sprites?.other['official-artwork'].front_default
       })
      }
      setPokemons([...pokemons, ...pokemonsArray])
    } catch (error) {
      console.log('[error]', error)
    }
  }
  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemons}
     isNext={ nextUrl}/>
    </SafeAreaView>
  )
}