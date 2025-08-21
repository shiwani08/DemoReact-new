import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/teamsStyle';

const Teams = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚫 Access Denied</Text>
      <Text style={styles.message}>
        You do not have permission to access this page.
      </Text>
      <Button 
        title="Go Back" 
        onPress={() => navigation.goBack()} 
        color="#007BFF"
      />
    </View>
  );
};

export default Teams;
