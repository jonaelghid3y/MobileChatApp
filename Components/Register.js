import React from 'react'
import { View,TextInput,Text, TouchableOpacity } from 'react-native'

export default function Register() {
  return (
    <View>
        <Text>Register</Text>
        <TextInput placeholder='Username'></TextInput>
        <TextInput placeholder='Password'></TextInput>
        <TouchableOpacity ><Text>Logg in</Text></TouchableOpacity>


    </View>
  )
}
