import React, { useState } from "react";
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button, Image, Input } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { Dimensions } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const signIn = () => {};
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "data:image/png;base64,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",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          value={email}
          onChangeText={(email) => setEmail(email)}
          placeholder="Email"
          autoFocus
          type="email"
        />
        <Input
          value={password}
          onChangeText={(password) => setpassword(password)}
          placeholder="Password"
          secureTextEntry
          type="password"
        />
        <Button
          title="Log in"
          buttonStyle={{
            backgroundColor: "blue",
            borderRadius: 5,
          }}
          titleStyle={{ fontWeight: "bold", fontSize: 23 }}
          containerStyle={{
            height: 50,
            marginVertical: 10,
          }}
          onPress={() => signIn()}
        />
        <Button
          title="Register"
          type="outline"
          buttonStyle={{
            borderRadius: 5,
          }}
          titleStyle={{ fontWeight: "500", fontSize: 22 }}
          containerStyle={{
            height: 50,
            marginVertical: 10,
          }}
        />
      </View>
      <View style={{height:110}} />
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
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
