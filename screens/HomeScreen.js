import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { Button } from "@rneui/themed";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { StatusBar } from "expo-status-bar";

const HomeScreen = ({ navigation }) => {

  return (
    <SafeAreaView
      options={{
        // headerTitle: (props) => <LogoTitle {...props} />,
        headerRight: () => (
          <Button
            onPress={logOut}
            title="Log Out"
            buttonStyle={{
              borderRadius: 5,
            }}
          />
        ),
      }}
    >
      <StatusBar style="light" />
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
