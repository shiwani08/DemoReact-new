// app/index.tsx
import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import styles from "../styles/indexStyle"; 

export default function IndexScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/images/logo.jpeg")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.heading}>Simplified Spaces</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionContent}>
            <View style={styles.textContainer}>
              <Text style={styles.sectionText}>1. Book an Office</Text>
              <Text style={styles.sectionDesc}>
                This is a demo description about booking an office. You can add
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
          <Text style={styles.sectionText}>2. Book a Room</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionText}>3. Select the Agenda</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionText}>1. Book an Office</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionText}>2. Book a Room</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionText}>3. Select the Agenda</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionText}>1. Book an Office</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionText}>2. Book a Room</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionText}>3. Select the Agenda</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionText}>1. Book an Office</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionText}>2. Book a Room</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionText}>3. Select the Agenda</Text>
        </View>
      </View>
    </ScrollView>
  );
}


