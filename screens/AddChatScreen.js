import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Button, Input } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { StatusBar } from "expo-status-bar";

export default function AddChatScreen({ navigation }) {
  const [input, setInput] = useState();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chats",
    });
  }, [navigation]);

  const createChat = async () => {
    await addDoc(collection(db, "chats"), {
      chatName: input,
    })
      .then(() => {
        navigation.goBack();
      })
      .catch((err) => alert(err));
  };
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Input
        value={input}
        placeholder="Add a chat name"
        onSubmitEditing={createChat}
        onChangeText={(text) => setInput(text)}
        leftIcon={
          <Icon name="wechat" type="AntDesign" size={24} color="black" />
        }
      />
      <Button
        disabled={!input}
        onPress={createChat}
        title="Create Group Chat"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 30,
    height: "100%",
  },
});
