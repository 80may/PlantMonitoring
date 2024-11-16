import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { database } from '../config/firebase';
import { ref, onValue } from 'firebase/database';
import { PlantCard } from '../components/PlantCard';
import { useNavigation } from '@react-navigation/native';

interface Plant {
  id: string;
  name: string;
  moisture: number;
  lastWatered: string;
}

export const HomeScreen = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    const plantsRef = ref(database, 'plants');
    const unsubscribe = onValue(plantsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const plantsList = Object.entries(data).map(([id, plant]: [string, any]) => ({
          id,
          ...plant,
        }));
        setPlants(plantsList);
      }
    });

    return () => unsubscribe();
  }, []);

  const handlePlantPress = (plant: Plant) => {
    navigation.navigate('PlantDetails', { plant });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={plants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PlantCard
            name={item.name}
            moisture={item.moisture}
            lastWatered={item.lastWatered}
            onPress={() => handlePlantPress(item)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});