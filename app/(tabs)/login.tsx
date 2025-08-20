import { Link } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TextInput,
  DrawerLayoutAndroid,
} from "react-native";
// import { Switch } from "react-native-gesture-handler";

export default function Login() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>

      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      <Text style={styles.text}>Not a user?</Text>
      <Link href="/signup" style={styles.link}>Go to Sign Up</Link>
      {/* <DrawerLayoutAndroid drawerBackgroundColor="rgba(0,0,0,0.5)" renderNavigationView={function (): React.JSX.Element {
              throw new Error("Function not implemented.");
          } } /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // centers vertically
    alignItems: "center", // centers horizontally
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    padding: 12,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
    padding: 12,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    width: "80%",
    padding: 12,
  },
  link: {
    marginLeft: 5,
    justifyContent: "center",
    fontSize: 12,
    fontWeight: "bold",
    color: "#007AFF", // iOS blue link color
  },
});
