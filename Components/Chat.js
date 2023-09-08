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
  KeyboardAvoidingView,
} from "react-native";
import { AuthContext } from "./Context/AuthContext";

function Chat() {
  const {
    handleMessages,
    chatMessages,
    sendMessages,
    userId,
    deleteMessage,
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

    const handleDelete = async (id) => {
      try {
        if (id === userId) {
          await deleteMessage(item._id); 

        }
      } catch (error) {
        console.log(error);
      }
    };

    const isSentByUser = item?.user?._id === userId;
    const bubbleStyle = isSentByUser ? styles.sentBubble : styles.receivedBubble;
    const textAlignment = isSentByUser ? "right" : "left";
    const textColor = isSentByUser ? "white" : "black";

    return (
      <TouchableWithoutFeedback onLongPress={handleDelete}>
        <View style={[styles.item, bubbleStyle]}>
          <Text style={[styles.title, { textAlign: textAlignment, color: textColor }]}>
            {item.content}
          </Text>
          <Text>{formattedDate}</Text>

          {isSentByUser && (
            <TouchableOpacity onPress={() =>(handleDelete(item.user._id)
          )}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const [message, setMessage] = useState("");

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
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex:1}}
      keyboardVerticalOffset={Platform.select({ ios: 100, android: 30 })}
      >
    <SafeAreaView style={styles.container}>
        <FlatList
          data={Object.values(chatMessages)} // Convert the object to an array for rendering
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
    </KeyboardAvoidingView>
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
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
  },
  sentBubble: {
    backgroundColor: "#13C9FF",
    alignSelf: "flex-end",
    flexWrap: 'wrap',
  },
  receivedBubble: {
    backgroundColor: "#CCE9F1",
    alignSelf: "flex-start",
    flexWrap: 'wrap',
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
    backgroundColor: "#0076E6",
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
