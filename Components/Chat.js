import React, { useState, useEffect, useContext } from "react";
import {
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { AuthContext } from "./Context/AuthContext";

function Chat() {
  const {
    handleMessages,
    chatMessages,
    sendMessages,
    deleteMessage,
    userId, // Assuming you have the user's ID in the AuthContext
  } = useContext(AuthContext);

  useEffect(() => {
    handleMessages();
  }, []);



 

  const renderMessage = ({ item }) => {
    const dateObject = new Date(item.date);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();

    const formattedDate = `${year}-${month < 10 ? "0" : ""}${month}-${
      day < 10 ? "0" : ""
    }${day}`;

    const handleLongPress = () => {
      if (item.senderId === userId) {
        // Show the delete button only if the message was sent by you
        setLongPressedMessage(item._id);
      }
    };

    const handleDelete = async () => {
      try {
        await deleteMessage(item._id);
        setLongPressedMessage(null);
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <TouchableWithoutFeedback onLongPress={handleLongPress}>
        <View style={styles.item}>
          <Text style={styles.title}>{item.content}</Text>
          <Text>{formattedDate}</Text>
          
          {item.senderId === userId && longPressedMessage === item._id && (
            <TouchableOpacity onPress={handleDelete}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const [message, setMessage] = useState("");
  const [longPressedMessage, setLongPressedMessage] = useState(null);

  const handleSendMessage = async () => {
    if (message.trim() === "") return;

    try {
      await sendMessages(message);
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={chatMessages}
        renderItem={renderMessage}
        keyExtractor={(item) => item._id}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  sendButton: {
    marginLeft: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#4CAF50",
    borderRadius: 8,
  },
  sendButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  deleteButton: {
    color: "red",
    fontWeight: "bold",
  },
});

export default Chat;
