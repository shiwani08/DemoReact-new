import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function Login() {
  const [isEnabled, setIsEnabled] = useState(false);
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>
          <Ionicons name="person" style={styles.icon} size={20} />
          Simplified Spaces
        </Text>

        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} secureTextEntry />

        {/* Custom button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/")}
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

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20, // padding for the whole page
  },
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20, // padding inside container
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#5fa193ff",
    padding: 12,
  },
  icon: {
    marginRight: 10,
    padding: 10,
    color: "#5fa193ff",
  },
  input: {
    height: 40,
    borderColor: "#5fa193ff",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "100%",
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#5fa193ff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff", // white text
    fontWeight: "bold",
    fontSize: 16,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  link: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#007AFF",
  },
});
