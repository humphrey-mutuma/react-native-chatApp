import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import { Button } from "@rneui/themed";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

const Stack = createStackNavigator();

const globaScreenOptions = {
  headerStyle: { backgroundColor: "#2C6BED" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
};

export default function App() {
  const logOut = (navigation) => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globaScreenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation, route }) => ({
            headerRight: () => (
              <Button onPress={() => logOut(navigation)} title="Log Out" />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
