import React from 'react'
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'
import { useContext, useState } from 'react';
import { AuthContext } from './Context/AuthContext';

export default function Settings() {
    const { handleLogout,getUserInfo, handleUserSettings, firstName, setFirstName, setLastName, lastName } = useContext(AuthContext);

    getUserInfo();

    return (
        <View style={styles.container}>

            <View style={styles.picturecontainer}>
                <Image style={styles.img} resizeMode='contain' source={{ uri: 'https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/user-account-profile-human-avatar-face-head--256.png' }}></Image>
            </View>
            <TextInput
                placeholderTextColor={'#e6e6e6'}
                style={styles.form}
                placeholder='First name'
                value={firstName}
                onChangeText={setFirstName}
            > {firstName}
            </TextInput>


            <TextInput
                placeholderTextColor={'#e6e6e6'}
                style={styles.form}
                placeholder='Last name'
                value={lastName}
                onChangeText={setLastName}
            >
                {lastName}
            </TextInput >
            <TouchableOpacity style={styles.button} onPress={() => handleUserSettings(firstName, lastName)} ><Text style={styles.buttontext}>Change user info</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleLogout()} ><Text style={styles.buttontext}>Log out</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttonDelete}  ><Text style={styles.buttontextDelete}>Delete Acount</Text></TouchableOpacity>

        </View>
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
    picturecontainer: {
        marginTop: 60,
        borderWidth: 1,
        height: 120,
        width: 120,
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',


    },
    img: {
        height: 80,
        width: 80,


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
        top: 190,
        right: 145,
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
        marginTop: 80,
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
        marginTop: 90,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',


        fontSize: 30,

        width: 150,
        height: 50,

        backgroundColor: '#177ca4',
        borderRadius: 10,
        fontFamily: '',

        shadowColor: "#000",
        shadowOffset: {
            width: 7,
            height: 7,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },

    buttontext: {


        fontSize: 20,
        textAlign: 'center',
        color: 'white',


    }
    ,
    buttonDelete: {
        marginTop: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#FFBABA',

        width: 150,
        height: 50,


        borderRadius: 10,
        fontFamily: '',

        shadowColor: "#000",
        shadowOffset: {
            width: 7,
            height: 7,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    buttontextDelete: {


        fontSize: 20,
        textAlign: 'center',
        color: '#D8000C',



    }

});


