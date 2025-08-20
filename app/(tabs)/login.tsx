import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, TextInput, DrawerLayoutAndroid } from "react-native";
// import { Switch } from "react-native-gesture-handler";

export default function Login() {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Login Screen</Text>

      <Text style={styles.text}>
        Already a user? {isEnabled ? "Yes" : "No"}
      </Text>
      <Switch value={isEnabled} onValueChange={toggleSwitch} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
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
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    width: "80%",
  },
});
