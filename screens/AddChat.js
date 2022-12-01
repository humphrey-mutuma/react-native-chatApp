import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Button, Input } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

export default function AddChat({ navigation }) {
  const [input, setInput] = useState();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add Chats",
    });
  }, [navigation]);

  const createChat = async () => {
    await addDoc(collection(db, "chats"), {
      chatName:input
    })
      .then(() => {
        navigation.goBack();
      })
      .catch((err) => alert(err));
  };
  return (
    <View>
      <Input
        value={input}
        placeholder="Add a chat name"
        onSubmitEditing={createChat}
        onChangeText={(text) => setInput(text)}
        leftIcon={
          <Icon name="wechat" type="AntDesign" size={24} color="black" />
        }
      />
      <Button onPress={createChat} title="Create a chat" />
    </View>
  );
}

const styles = StyleSheet.create({});
