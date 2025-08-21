import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Appbar, Button } from "react-native-paper";
import styles from "../styles/indexStyle";
import * as Location from "expo-location";

import type { StackNavigationProp } from "@react-navigation/stack";

type IndexScreenProps = {
  navigation: StackNavigationProp<any>;
  route?: any;
  options: { title: string };
  back?: boolean;
};

export default function IndexScreen({}: IndexScreenProps) {
  const router = useRouter();
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const getLocation = async () => {
    // Ask for permission
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    // Get current position
    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);
  };

  return (
    <>
      <Appbar.Header>
        {/* <Appbar.BackAction onPress={() => navigation.goBack()} /> */}
        <Appbar.Content
          title="Simplified Spaces"
          titleStyle={styles.appbarTitle}
        />
        <Appbar.Action
          icon="account-circle"
          onPress={() => router.navigate("./screens/profile")}
        />
        <Appbar.Action
          icon="help-circle"
          onPress={() => router.navigate("./screens/help")}
        />
      </Appbar.Header>
      <View>
        <Text style={styles.heading}>Select Today's agenda!!</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.section}>
          <View style={styles.section}>
            <View style={styles.sectionContent}>
              <View style={styles.textContainer}>
                <Text style={styles.sectionText}>Book an Office</Text>
                <Text style={styles.sectionDesc}>
                  This is a demo description about booking an office. You can
                  add details here about how users can book and what facilities
                  are available.
                </Text>
              </View>

              <Image
                source={require("../../assets/images/demo.jpg")}
                style={styles.sectionImage}
              />
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.sectionContent}>
            <View style={styles.textContainer}>
              <Text style={styles.sectionText}>Book a Room</Text>
              <Text style={styles.sectionDesc}>
                This is a demo description about booking a room. You can add
                details here about how users can book and what facilities are
                available.
              </Text>
            </View>

            <Image
              source={require("../../assets/images/demo.jpg")}
              style={styles.sectionImage}
            />
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionContent}>
            <View style={styles.textContainer}>
              <Text style={styles.sectionText}>Book for a team</Text>
              <Text style={styles.sectionDesc}>
                This is a demo description about booking for a team. You can add
                details here about how users can book and what facilities are
                available.
              </Text>
            </View>

            <Image
              source={require("../../assets/images/demo.jpg")}
              style={styles.sectionImage}
            />
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.sectionContent}>
            <View style={styles.textContainer}>
              <Text style={styles.sectionText}>Book a virtual room</Text>
              <Text style={styles.sectionDesc}>
                This is a demo description about booking for a team. You can add
                details here about how users can book and what facilities are
                available.
              </Text>
            </View>

            <Image
              source={require("../../assets/images/demo.jpg")}
              style={styles.sectionImage}
            />
          </View>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Button onPress={getLocation}>Get Location</Button>
          {errorMsg ? (
            <Text>{errorMsg}</Text>
          ) : location ? (
            <Text>
              Latitude: {location.coords.latitude}, Longitude:{" "}
              {location.coords.longitude}
            </Text>
          ) : (
            <Text>Press the button to get location</Text>
          )}
        </View>
      </ScrollView>
    </>
  );
}
