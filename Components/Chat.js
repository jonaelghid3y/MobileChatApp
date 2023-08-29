import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function Chat() {
  return (
    <View>
      <TouchableOpacity style={styles.btn}>
        <Text>
            logout
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 415,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});

export default Chat;
