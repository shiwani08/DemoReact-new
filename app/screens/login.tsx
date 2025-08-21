import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import styles from "../styles/loginStyle"; 
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
  if (!email || !password) {
    Alert.alert("Error", "Please enter email & password");
    return;
  }

  Alert.alert(
    "Logged in Successfully!!",
    "Welcome back!",
    [
      {
        text: "Continue",
        onPress: () => router.replace("/"), 
      },
    ]
  );
};


  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>
          <Ionicons name="person" style={styles.icon} size={20} />
          Simplified Spaces
        </Text>

        <TextInput 
          placeholder="Email" 
          style={styles.input} 
          value={email}
          onChangeText={setEmail}
        />
        <TextInput 
          placeholder="Password" 
          style={styles.input} 
          secureTextEntry 
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Not a user?</Text>
        <Link href="/signup" style={styles.link}>
          Go to Sign Up
        </Link>
      </View>
    </ScrollView>
  );
}
