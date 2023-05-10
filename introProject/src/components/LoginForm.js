import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import propTypes from 'prop-types'

export default function LoginForm() {
  return (
    <View>
      <TextInput placeholder='email'/>
      <Button title='enviar' onPress={() => console.log('Enviado')}/>
    </View>
  )
}

LoginForm.propTypes ={
  name: propTypes.string.isRequired
}

LoginForm.defaultProps = {
  name: 'Naomi'
}