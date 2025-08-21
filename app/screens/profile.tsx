// ProfileScreen.tsx
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import styles from "../styles/profileStyle";

export default function ProfileScreen() {
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert("Logout", "You have been logged out!", [
      {
        text: "OK",
        onPress: () => {
          router.replace("/screens/login");
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/user.jpg")} 
        style={styles.profilePic}
      />

      <Text style={styles.name}>John Doe</Text>

      <Text style={styles.memberType}>Premium Member</Text>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

