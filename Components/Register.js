import React from 'react'
import { View,TextInput,Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard  } from 'react-native'
import { useContext, useState } from 'react';
import { AuthContext } from './Context/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Register() {

    
    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { handleRegister,registerMessage,succsesMessage} = useContext(AuthContext);
  return (

    <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding" : "height"} 
    style={{flex: 1}}
>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient colors={['#1c96c5', '#84cdee']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={styles.container}>
            <Text style={styles.title}>CHAPP</Text>
            <View style={styles.iconContainer}>
            <FontAwesome5 style={styles.icon} name="user" size={130} color="white" />
            <FontAwesome5 style={styles.iconShadow} name="user-alt" size={120} color="black" />
            </View>
           
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
            <TouchableOpacity style={{marginTop: 20}}  onPress={() => navigation.navigate('Login')} ><Text style={styles.register}>Back</Text></TouchableOpacity>
           
        </LinearGradient>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
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
    error: {

        color: 'red'

    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
        marginBottom: 85,
    },
    icon: {
        
        zIndex: 999,
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
        top: 30,
        left: 20 ,
       
        opacity: 0.15,
        color: '#C800FF',

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
        marginBottom: 0,
        
    },
    text: {
        color: 'white',
        fontWeight: 'bold',


    },
    register: {
        color: 'white',
        textDecorationLine: 'underline'


    },
    button: {
        marginTop: 120,
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

