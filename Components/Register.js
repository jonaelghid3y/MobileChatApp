import React from 'react'
import { View,TextInput,Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useContext, useState } from 'react';
import { AuthContext } from './Context/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Register() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { handleRegister,registerMessage,succsesMessage} = useContext(AuthContext);
  return (

    <LinearGradient colors={['#1c96c5', '#84cdee', ]} start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }} style={styles.container}>
            <Text style={styles.title}>CHAPP</Text>
            <FontAwesome5 style={styles.icon} name="user" size={100} color="white" />
            <FontAwesome5 style={styles.iconShadow} name="user-alt" size={90} color="black" />
           
            <View style={styles.formcontainer}>
                <Text style={styles.text}>REGISTER</Text>
                <TextInput
                    placeholderTextColor={'#e6e6e6'}
                    style={styles.form}
                    placeholder='Username'
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    placeholderTextColor={'#e6e6e6'}
                    style={styles.formpassword}
                    placeholder='Password'
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true} />
                     
            </View>
            {registerMessage}
            {succsesMessage}

            <TouchableOpacity style={styles.button} onPress={() => handleRegister(username, password)} ><Text style={styles.buttontext}>Sign upp</Text></TouchableOpacity>
           
        </LinearGradient>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 415,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10
    },
    error:{
        color: '#D8000C',
        backgroundColor: '#FFBABA',
        padding: 10

    },
    succses:{
    
        color: '#270',
        backgroundColor: '#DFF2BF',
     
        
       
       
      
 
    }
    ,
    formcontainer: {
        display: 'flex',



    },

    form: {
        marginTop: 10,
        height: 50,
        width: 300,
        shadowColor: "#000",
        borderColor: 'white',
        borderWidth: 2,
        paddingLeft: 10,
        color: 'white',
        
    },
    formpassword: {

        marginTop: 40,
        marginBottom: 10,
        height: 50,
        width: 300,
        shadowColor: "#000",
        borderColor: 'white',
        borderWidth: 1.5,
        paddingLeft: 10,
        color: 'white',
    },
    icon: {
        marginTop: 40,
        marginBottom: 80,
        zIndex: 999 ,
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

    },
    iconShadow: {
        position: 'absolute',
        top: 190,
        right: 145,
        opacity: 0.15,
        color:'#C800FF',
        
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

    },


    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Nico',
        marginTop: 80,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',


    },
    register:{
        color: 'white',
        textDecorationLine: 'underline'
        

    },
    button: {
        marginTop: 90,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
     
        
        fontSize: 30,
       
        width: 200,
        height: 50,
       
        backgroundColor: 'white',
        borderRadius: 10,
        fontFamily: '',

        shadowColor: "#000",
        shadowOffset: {
            width: 7,
            height: 7,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,


    }
    ,
    buttontext: {
     
        
        fontSize: 30,
        textAlign: 'center',
        color: '#177ca4',


    }

});

