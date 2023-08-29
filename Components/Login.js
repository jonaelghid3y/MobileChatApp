import React from 'react'
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'
import { useContext, useState } from 'react';
import { AuthContext } from './Context/AuthContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';




export default function Login({navigation}) {
  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { handleLogin, logginMessage } = useContext(AuthContext);

    // setMessage('')



    return (

        <LinearGradient colors={['#1c96c5', '#84cdee', ]} start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }} style={styles.container}>
            <Text style={styles.title}>CHAPP</Text>
            <MaterialCommunityIcons style={styles.icon} name="message-processing-outline" size={100}  color="white" />
            <MaterialCommunityIcons style={styles.iconShadow}name="message" size={90} />
            <View style={styles.formcontainer}>
                <Text style={styles.text}>LOGIN</Text>
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
                     <TouchableOpacity ><Text style={styles.register} onPress={() => navigation.navigate('Register')}>register here</Text></TouchableOpacity>
              

            </View>
           {logginMessage}

            <TouchableOpacity style={styles.button} onPress={() => handleLogin(username, password)} ><Text style={styles.buttontext}>sign in</Text></TouchableOpacity>
           
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
    formcontainer: {
        display: 'flex',



    },

    form: {
        marginTop: 10,
        height: 50,
        width: 300,
        shadowColor: "#000",
        borderColor: 'white',
        borderWidth: 1.5,
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
    error:{

        color:'red'

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
        top: 198,
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
        marginTop: 80,
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

