import React from 'react'
import { View,TextInput,Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useContext, useState } from 'react';
import { AuthContext } from './Context/AuthContext';

export default function Register() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { handleRegister,message } = useContext(AuthContext);
  return (

    <View style={styles.container}>
    <Text style={styles.title}>Register</Text>
    <TextInput
        style={styles.form}
        placeholder='Username'
        value={username}
        onChangeText={setUsername}
    />
    <TextInput
        style={styles.form}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true} />
        <Text>{message}</Text>

    <TouchableOpacity style={styles.button} onPress={() => handleRegister(username, password)} ><Text style={styles.text}>sign upp</Text></TouchableOpacity>
</View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 415,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },

    form: {
        borderWidth: 1,

    },
    text: {
        color: 'white',
        textAlign: 'center',

    },
    button: {
        borderWidth: 1,
        borderRadius: 2,
        width: 60,
        height: 20,
        textAlign: 'center',


    }

});


