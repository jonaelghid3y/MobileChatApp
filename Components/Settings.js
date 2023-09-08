import React from 'react'
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'
import { useContext, useState } from 'react';
import { AuthContext } from './Context/AuthContext';
import { Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


export default function Settings() {

    const { handleLogout, getUserInfo, handleUserSettings, firstName, lastName, uppdateName, setUppdateName, uppdateLastName, setUppdateLastName, deleteUser, deleteMessages } = useContext(AuthContext);
    const [modalVisible, setModalVisible] = useState(false);
    console.log(deleteMessages)
    getUserInfo();

    return (
        <LinearGradient colors={['#1c96c5', '#84cdee',]} start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }} style={styles.container}>

            <View style={styles.picturecontainer}>
                <FontAwesome name="user-circle-o" size={120} color="white" />
                {/* <Image style={styles.img} resizeMode='contain' source={{ uri: 'https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/user-account-profile-human-avatar-face-head--256.png' }}></Image> */}
            </View>
            <View>
                <Text style={styles.text}>First name</Text>
                <View style={styles.form}>
                    <Text style={styles.text} >{firstName}</Text>
                </View>
            </View>

            <View>
                <Text style={styles.text}>Last name</Text>
                <View style={styles.form}>

                    <Text style={styles.text}  >{lastName}</Text>
                </View>
            </View>

            <View style={styles.buttoncontainer}>

                <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttontext}>Edit user <AntDesign name="edit" size={24} color="white" /> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => handleLogout()} >
                    <Text style={styles.buttontext}>Log out</Text>
                </TouchableOpacity>
            </View>

            {deleteMessages}

            <TouchableOpacity style={styles.buttonDelete} onPress={() => deleteUser()}>

                <Text style={styles.buttontextDelete}>Delete Acount</Text>

            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <LinearGradient colors={['#fff', '#1c96c5',]} start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }} style={styles.modalView}>
                        <View>
                            <Text style={styles.text}>firstname</Text>
                            <TextInput
                                style={styles.form}
                                placeholderTextColor={'white'}
                                placeholder={firstName}
                                value={uppdateName}
                                onChangeText={setUppdateName}
                            />
                        </View>

                        <View>
                            <Text style={styles.text}>lastname</Text>
                            <TextInput
                                placeholderTextColor={'white'}
                                style={styles.form}
                                placeholder={lastName}
                                value={uppdateLastName}
                                onChangeText={setUppdateLastName}
                            />
                        </View>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                handleUserSettings(uppdateName, uppdateLastName);
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.buttontext}>Save Changes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.buttontext}>Cancel</Text>
                        </TouchableOpacity>

                    </LinearGradient>
                </View>
            </Modal>
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
    picturecontainer: {
        marginTop: 60,
        // borderWidth: 2,
        height: 120,
        width: 120,
        borderRadius: 100,
        borderColor: 'white',
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
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'

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
    buttoncontainer: {

        display: 'flex',
        flexDirection: 'row',
        gap: 20,

    },
    button: {
        marginTop: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',


        fontSize: 30,

        width: 135,
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
        marginTop: 50,
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



    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        width: '80%',
        height: '50%',
        backgroundColor: "grey",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },


});


