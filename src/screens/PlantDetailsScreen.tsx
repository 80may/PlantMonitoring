import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { database } from '../config/firebase';
import { ref, update } from 'firebase/database';

export const PlantDetailsScreen = ({ route }) => {
  const { plant } = route.params;
  const [currentMoisture, setCurrentMoisture] = useState(plant.moisture);

  const handleWaterPlant = async () => {
    const now = new Date().toISOString();
    try {
      await update(ref(database, `plants/${plant.id}`), {
        lastWatered: now,
      });
    } catch (error) {
      console.error('Error updating plant:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{plant.name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Current Moisture: {currentMoisture}%</Text>
        <Text style={styles.infoText}>Last Watered: {plant.lastWatered}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleWaterPlant}>
        <Text style={styles.buttonText}>Water Plant</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});