import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import styles from "../styles/indexStyle";
import { Appbar } from "react-native-paper";
import { useRouter } from "expo-router";

import type { StackNavigationProp } from "@react-navigation/stack";

type IndexScreenProps = {
  navigation: StackNavigationProp<any>;
  route?: any;
  options: { title: string };
  back?: boolean;
};

export default function IndexScreen({}: IndexScreenProps) {
  const router = useRouter();
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
                  This is a demo description about booking a room. You can
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

      <View style={styles.section}>
        <View style={styles.sectionContent}>
              <View style={styles.textContainer}>
                <Text style={styles.sectionText}>Book for a team</Text>
                <Text style={styles.sectionDesc}>
                  This is a demo description about booking for a team. You can
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
      <View style={styles.section}>
        <View style={styles.sectionContent}>
              <View style={styles.textContainer}>
                <Text style={styles.sectionText}>Book a virtual room</Text>
                <Text style={styles.sectionDesc}>
                  This is a demo description about booking for a team. You can
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
      </ScrollView>
    </>
  );
}
