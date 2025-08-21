import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/teamsStyle';

const Help = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help Page</Text>
      <Text style={styles.message}>
        You'll get all your queries solved here.
      </Text>
      <Button 
        title="Go Back" 
        onPress={() => navigation.goBack()} 
        color="#007BFF"
      />
    </View>
  );
};

export default Help;
