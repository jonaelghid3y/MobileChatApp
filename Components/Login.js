import React from 'react'
import { View,TextInput, TouchableOpacity, Text, StyleSheet} from 'react-native'
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';

export default function Login({navigation}) {
    const {accessToken, handleLogin} = useContext(AuthContext);

    // handleLogin(username, password)

  return (
    
    <View style={styles.container}>
        <Text style={styles.title}>Logg in</Text>
        <TextInput style={styles.form} placeholder='Username'></TextInput>
        <TextInput style={styles.form} placeholder='Password'></TextInput>
        <TouchableOpacity style={styles.button} ><Text style={styles.text}>sign in</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} ><Text style={styles.text} onPress={() => navigation.navigate('Register')}>register</Text></TouchableOpacity>
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
    
    form:{
        borderWidth: 1,

    },
    text:{
        color: 'white',
        textAlign: 'center',
        
    },
    button:{
        borderWidth: 1,
        borderRadius: 2,
        width: 60,
        height: 20,
        textAlign: 'center',
        

    }
    
  });
  
