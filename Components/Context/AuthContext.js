import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Text, View, StyleSheet } from 'react-native';






export const AuthContext = createContext()



    export const AuthProvider = ({ children }) => {
    const [chatMessages, setChatMessages] = useState({});

    const navigation = useNavigation();

    const [accessToken, setAccessToken] = useState(null);
    const [registerMessage, setResgisterMessage] = useState('');
    const [succsesMessage, setSuccsesMessage] = useState('');
    const[firstName, setFirstName] = useState('')
    const[lastName, setLastName] = useState('')
    const[uppdateName, setUppdateName] = useState('')
    const[uppdateLastName, setUppdateLastName] = useState('')
    const [logginMessage, setLogginMessage] = useState('')
    const [deleteMessage, setDeleteMessage] = useState('')
    

    const handleLogin = async (username, password) => {

        try {
            const response = await fetch('https://chat-api-with-auth.up.railway.app/auth/token',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password
                    })
                })
            const data = await response.json()

            if (data.status === 200) {
                setLogginMessage(<Text style={styles.succses}>{data.message}<Entypo name="check" size={18} color="green" /></Text>)
                await AsyncStorage.setItem('accessToken', data.data.accessToken)
                setTimeout(() => {
                    setAccessToken(data.data.accessToken)
                    setLogginMessage('')
                }, 2000);

                
            }
            else {
                setLogginMessage(<Text style={styles.error}>{data.message}<Ionicons name="ios-warning" size={18} color="red" /></Text>)
                setTimeout(() => {

                    setLogginMessage('')
                }, 2000);
            }

        } catch (error) {
            console.log(error)
        }
    }
    const handleRegister = async (username, password) => {

        try {
            const response = await fetch('https://chat-api-with-auth.up.railway.app/auth/register',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password
                    })
                })
            const data = await response.json()
            console.log(data.status)

            if (data.status === 409) {

                setResgisterMessage(<Text style={styles.error}>{data.message}<Ionicons name="ios-warning" size={18} color="red" /></Text>)
                setTimeout(() => {

                    setResgisterMessage('');
                }, 2000);

            }
            else if (data.status === 200) {

                setSuccsesMessage(
                    <Text style={styles.succses}>{data.message}<Entypo name="check" size={18} color="green" /></Text>)
                setTimeout(() => {
                    navigation.navigate('Login');
                    setSuccsesMessage('');
                }, 2000);
            }
            else {
                setResgisterMessage(<Text style={styles.error}>You need an username to Register<Ionicons name="ios-warning" size={18} color="red" /></Text>)
                setTimeout(() => {

                    setResgisterMessage('');
                }, 4000);
            }

        } catch (error) {
            console.log(error)
        }
    }
    const getUserInfo = async () => {

        try {
            const response = await fetch('https://chat-api-with-auth.up.railway.app/users',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    },
                 
                })
            const data = await response.json()
           
            if(data.status === 200){
                
                setLastName(data.data.lastname)
                setFirstName(data.data.firstname)

               
                

            }
            


        } catch (error) {
            console.log(error)
        }
    }

    const handleUserSettings = async (uppdateName, uppdateLastName) => {

        try {
            const response = await fetch('https://chat-api-with-auth.up.railway.app/users',
                {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    },
                    body: JSON.stringify({
                        firstname: uppdateName,
                        lastname: uppdateLastName
                    })
                })
            const data = await response.json()
            if(data.status === 200){

                getUserInfo();
                setUppdateLastName("")
                setUppdateName("")

            }
           


        } catch (error) {
            console.log(error)
        }
    }
    const deleteUser = async () => {

        try {
            const response = await fetch('https://chat-api-with-auth.up.railway.app/users',
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    },
                   
                })
            const data = await response.json()
            if(data.status === 200){
                setDeleteMessage(<Text style={styles.error}>Your acount is now deleted<Ionicons name="ios-warning" size={18} color="red" /></Text>)
                setTimeout(() => {
                    setDeleteMessage('')
                    handleLogout()
                }, 2000);
              

            }
           


        } catch (error) {
            console.log(error)
        }
    }

    const handleLogout = async () => {
        console.log('handleLogout')

        try {
            await AsyncStorage.removeItem('accessToken')
            setAccessToken(null)
        } catch (error) {
            console.log(error)
        }
    }

    const isLoggedIn = async () => {
        console.log('isLoggedIn')

        try {
            const token = await AsyncStorage.getItem('accessToken')
            setAccessToken(token)
        } catch (error) {
            console.log(error)
        }
    }


    const handleMessages = async () => {
        try {
            const response = await fetch('https://chat-api-with-auth.up.railway.app/messages', 
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            });
    
            const data = await response.json();

        
        
        if (data.status === 200) {

            setChatMessages(data.data)
        
            
            // console.log('Unexpected response format:', data);
        }
          
        } catch (error) {
            console.log(error);
        }
    }

    

    useEffect(() => {
        isLoggedIn();
        

    }, [])


    return (

        <AuthContext.Provider value={{
            chatMessages, 
            handleMessages,
            accessToken,
            handleLogin,
            handleLogout,
            handleRegister,
            handleUserSettings,
            getUserInfo,
            deleteUser,
            deleteMessage,
            registerMessage,
            setResgisterMessage,
            logginMessage,
            setLogginMessage,
            succsesMessage,
            firstName,
            lastName,
            uppdateName,
            setUppdateName,
            uppdateLastName,
            setUppdateLastName,
            setFirstName,
            setLastName
        }}>
            {children}
        </AuthContext.Provider>
    )
}
const styles = StyleSheet.create({
    succses: {

        color: '#270',
        backgroundColor: '#DFF2BF',
        padding: 15,
        position: 'absolute',
        textAlign: 'center',
        top: 585,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        textAlign: 'center'

    },
    error: {
        color: '#D8000C',
        backgroundColor: '#FFBABA',
        padding: 10,
        borderRadius: 20,
        position: 'absolute',
        top: 590,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        textAlign: 'center'

    },
})
