import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Text, View, StyleSheet } from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [sentMessages, setSentMessages] = useState('');
  const [chatMessages, setChatMessages] = useState({});
  const navigation = useNavigation();
  const [accessToken, setAccessToken] = useState(null);
  const [registerMessage, setResgisterMessage] = useState('');
  const [succsesMessage, setSuccsesMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [uppdateName, setUppdateName] = useState('');
  const [uppdateLastName, setUppdateLastName] = useState('');
  const [logginMessage, setLogginMessage] = useState('');
  const [deleteMessages, setDeleteMessages] = useState('');
  const [userId, setUserId] = useState('');
  const [selectedMessage, setSelectedMessage] = useState(null);


  const handleLogin = async (username, password) => {
    try {
      const response = await fetch('https://chat-api-with-auth.up.railway.app/auth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      const data = await response.json();

      if (data.status === 200) {
        setLogginMessage(
          <Text style={styles.succses}>
            {data.message}
            <Entypo name="check" size={18} color="green" />
          </Text>
        );
        await AsyncStorage.setItem('accessToken', data.data.accessToken);
        await AsyncStorage.setItem('userID', data.data._id);
        setTimeout(() => {
          setAccessToken(data.data.accessToken);
          setLogginMessage('');
          setUserId(data.data._id);
        }, 2000);
      } else {
        setLogginMessage(
          <Text style={styles.error}>
            {data.message}
            <Ionicons name="ios-warning" size={18} color="red" />
          </Text>
        );
        setTimeout(() => {
          setLogginMessage('');
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = async (username, password) => {
    try {
      const response = await fetch('https://chat-api-with-auth.up.railway.app/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      const data = await response.json();
      console.log(data.status);

      if (data.status === 409) {
        setResgisterMessage(
          <Text style={styles.error}>
            {data.message}
            <Ionicons name="ios-warning" size={18} color="red" />
          </Text>
        );
        setTimeout(() => {
          setResgisterMessage('');
        }, 2000);
      } else if (data.status === 200) {
        setSuccsesMessage(
          <Text style={styles.succses}>
            {data.message}
            <Entypo name="check" size={18} color="green" />
          </Text>
        );
        setTimeout(() => {
          navigation.navigate('Login');
          setSuccsesMessage('');
        }, 2000);
      } else {
        setResgisterMessage(
          <Text style={styles.error}>
            You need a username to Register<Ionicons name="ios-warning" size={18} color="red" />
          </Text>
        );
        setTimeout(() => {
          setResgisterMessage('');
        }, 4000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUserInfo = async () => {
    try {
      const response = await fetch('https://chat-api-with-auth.up.railway.app/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();

      if (data.status === 200) {
        setLastName(data.data.lastname);
        setFirstName(data.data.firstname);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserSettings = async (uppdateName, uppdateLastName) => {
    try {
      const response = await fetch('https://chat-api-with-auth.up.railway.app/users', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          firstname: uppdateName,
          lastname: uppdateLastName,
        }),
      });
      const data = await response.json();
      if (data.status === 200) {
        getUserInfo();
        setUppdateLastName('');
        setUppdateName('');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async () => {
    try {
      const response = await fetch('https://chat-api-with-auth.up.railway.app/users', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      if (data.status === 200) {
        setDeleteMessages(
          <Text style={styles.error}>
            Your account is now deleted<Ionicons name="ios-warning" size={18} color="red" />
          </Text>
        );
        setTimeout(() => {
          setDeleteMessages('');
          handleLogout();
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    console.log('handleLogout');
    try {
      await AsyncStorage.removeItem('accessToken');
      setAccessToken(null);
    } catch (error) {
      console.log(error);
    }
  };

  const isLoggedIn = async () => {
    console.log('isLoggedIn');
    try {
      const token = await AsyncStorage.getItem('accessToken');
      const id = await AsyncStorage.getItem('userID');
      setAccessToken(token);
      setUserId(id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMessages = async () => {
    try {
      const response = await fetch('https://chat-api-with-auth.up.railway.app/messages', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const data = await response.json();

      if (data.status === 200) {
        setChatMessages(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessages = async (messageContent) => {
    try {
      const response = await fetch('https://chat-api-with-auth.up.railway.app/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          content: messageContent,
        }),
      });

      const data = await response.json();
      if (data.status === 201) {
        setSentMessages(data.data);
      } else {
        console.log('Unexpected response format:', data);
      }
    } catch (error) {
      console.log(error);
    }
  };
 
  const deleteMessage = async (messageID) => {
    try {
      const response = await fetch(`https://chat-api-with-auth.up.railway.app/messages/`+messageID, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      const data = await response.json();
      console.log(data)
      if (data.status === 200) {
        console.log();
        setChatMessages((prevChatMessages) =>
          prevChatMessages.filter((message) => message._id !== messageID)
        );
        handleMessages();

      } else {
        console.log('Failed to delete the message:', data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isLoggedIn();

  }, []);

  return (
    <AuthContext.Provider
      value={{
        deleteMessage,
        sendMessages,
        chatMessages,
        handleMessages,
        accessToken,
        handleLogin,
        handleLogout,
        handleRegister,
        handleUserSettings,
        getUserInfo,
        deleteUser,
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
        setLastName,
        userId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

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
    textAlign: 'center',
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
    textAlign: 'center',
  },
});

