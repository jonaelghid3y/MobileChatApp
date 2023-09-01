import React, { useState, useEffect, useContext } from "react";
import { View, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AuthContext } from "./Context/AuthContext";

function Chat() {
  const { handleMessages, chatMessages } = useContext(AuthContext);


  

  useEffect(() => {
    // async function fetchMessages() {
    //   try {
    //     const messages = await handleMessages();
    //     // setChatMessages(messages.data); // Assuming messages.data contains the chat messages array
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    handleMessages();
  }, []);



 

  const renderMessage = ({ item }) => {
    const dateObject = new Date(item.date);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1; // Months are zero-indexed, so add 1
    const day = dateObject.getDate();
  
    const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
  
    return (
      <TouchableOpacity style={styles.item}>
        <Text style={styles.title}>{item.content}</Text>
        <Text>{formattedDate}</Text>
      </TouchableOpacity>
    );
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={chatMessages}
        renderItem={renderMessage}
        keyExtractor={(item) => item._id} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#f9c2ff",
  },
  title: {
    fontSize: 16,
  },
});

export default Chat;
