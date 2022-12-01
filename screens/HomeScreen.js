import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import CustomListItem from "../components/CustomListItem";
import { Avatar, Button } from "@rneui/themed";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
const HomeScreen = ({ navigation }) => {
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Home",
      headerStyle: { backgroungColor: "white" },
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={() => logOut()}>
            <Avatar
              rounded
              onPress={() => logOut()}
              source={{
                uri:
                  auth?.currentUser?.photoURL ||
                  "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
              }}
            />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            marginRight: 20,
          }}
        >
          <TouchableOpacity>
            <AntDesign name="camerao" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("AddChat")}>
            <SimpleLineIcons name="pencil" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
