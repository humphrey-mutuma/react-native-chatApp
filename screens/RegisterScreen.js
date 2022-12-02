import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Input, Text } from "@rneui/themed";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUri, setimageUri] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "My Login",
    });

    // return;
  }, [navigation]);

  const register = () => {
    Keyboard.dismiss; // hide keyboard;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log("userCredentials", userCredentials);
        if (userCredentials.user) {
          userCredentials.user
            .updateProfile({
              displayName: name,
              photoURL:
                imageUri ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
            })
            .then((s) => {
              navigation.navigate("Home");
            });
        }
      })
      .catch((err) => alert(err.message));
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 10 }}>
        Creat an account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          value={name}
          onChangeText={(name) => setName(name)}
          placeholder="Full Name"
          autoFocus
          type="text"
        />
        <Input
          value={email}
          onChangeText={(email) => setEmail(email)}
          placeholder="Email"
          type="email"
        />
        <Input
          value={password}
          onChangeText={(password) => setPassword(password)}
          placeholder="Password"
          secureTextEntry
          type="password"
        />
        <Input
          value={imageUri}
          onChangeText={(imageUri) => setimageUri(imageUri)}
          placeholder="Photo URL"
          type="text"
          onSubmitEditing={register}
        />

        <Button
          raised
          title="Register"
          buttonStyle={{
            borderRadius: 5,
          }}
          titleStyle={{ fontWeight: "500", fontSize: 22 }}
          containerStyle={{
            height: 50,
            marginVertical: 10,
          }}
          onPress={register}
        />
      </View>
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: Dimensions.get("window").height,
  },
  inputContainer: {
    width: Dimensions.get("window").width,
    paddingHorizontal: 20,
  },
});
