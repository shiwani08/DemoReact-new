import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function MapScreen() {
  const [region, setRegion] = useState({
    latitude: 20.5937, // India center
    longitude: 78.9629,
    latitudeDelta: 15,
    longitudeDelta: 15,
  });

  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    if (!search) return;
    try {
      let result = await Location.geocodeAsync(search);
      if (result.length > 0) {
        const { latitude, longitude } = result[0];
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        });
      }
    } catch (error) {
      console.warn("Location not found", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        placeholder="Search a place..."
        value={search}
        onChangeText={setSearch}
        onSubmitEditing={handleSearch}
        returnKeyType="search"
      />
      <MapView style={styles.map} region={region}>
        <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    position: "absolute",
    top: 40,
    left: 20,
    right: 20,
    zIndex: 1,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    elevation: 3,
  },
  map: {
    flex: 1,
  },
});
