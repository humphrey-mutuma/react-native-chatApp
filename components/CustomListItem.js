import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Avatar, ListItem } from "@rneui/themed";

const CustomListItem = () => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          React Chat group
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          mollitia aspernatur. Ipsum quas neque eveniet. Ex, temporibus nemo rem
          magni quidem culpa cupiditate ducimus delectus provident accusamus est
          modi voluptate!
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
