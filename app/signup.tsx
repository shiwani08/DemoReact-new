// app/signup.tsx
import React, { useState } from "react";
import styles from "./styles/signupStyle"; 
import MapView, { Marker } from 'react-native-maps';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";

export default function MapScreen() {
  const [region, setRegion] = useState({
    latitude: 28.6139,   // Default: New Delhi
    longitude: 77.209,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      {/* Search box */}
      <TextInput
        style={styles.searchBox}
        placeholder="Search location..."
        value={search}
        onChangeText={setSearch}
      />

      {/* Map */}
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
      >
        <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
      </MapView>
    </View>
  );
}
