import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface PlantCardProps {
  name: string;
  moisture: number;
  lastWatered: string;
  onPress: () => void;
}

export const PlantCard = ({ name, moisture, lastWatered, onPress }: PlantCardProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.moisture}>Moisture: {moisture}%</Text>
        <Text style={styles.lastWatered}>Last Watered: {lastWatered}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  moisture: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  lastWatered: {
    fontSize: 14,
    color: '#888',
  },
});