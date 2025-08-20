import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import styles from "../styles/loginStyle"; 
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
