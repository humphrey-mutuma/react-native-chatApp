import { View, Text, StyleSheet } from "react-native";
import React, { useState, useLayoutEffect } from "react";
import { Avatar, ListItem } from "@rneui/themed";
import {
  addDoc,
  collection,
  collectionGroup,
  doc,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { auth, db } from "../firebase";

const CustomListItem = ({ chatName, id, enterChat }) => {
  const [messages, setMessages] = useState([]);

  useLayoutEffect(() => {
    const getMessages = async () => {
      const querySnapshot = await getDocs(
        query(
          collectionGroup(db, "messages")
          // where("chatName", "==", route.params.chatName)
        )
      );
      querySnapshot.forEach((doc) => {
        setMessages((prev) => [{ id: doc.id, data: doc.data() }, ...prev]);
      });
    };
    getMessages();
  }, []);

  console.log("messages ", messages); // return []

  return (
    <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
      <Avatar
        rounded
        source={{
          uri:
            "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" ||
            messages?.[0]?.data?.message,
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          {messages?.[0]?.data?.email} : {messages?.[0]?.data.message}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
