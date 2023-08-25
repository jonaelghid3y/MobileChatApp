import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext()



export const AuthProvider = ({ children }) => {

    const [accessToken, setAccessToken] = useState(null);
    const [message, setMessage] = useState('');

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
                
                console.log(data.data.accessToken)
                await AsyncStorage.setItem('accessToken', data.data.accessToken)
                setAccessToken(data.data.accessToken)
            }
            else{
                console.log("fel")
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
            console.log(data)
            setMessage(data.message)

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

    useEffect(() => {
        isLoggedIn();
        
       
    }, [])




    return (

        <AuthContext.Provider value={{ accessToken, handleLogin, handleLogout, handleRegister,message }}>
            {children}
        </AuthContext.Provider>
    )
}
