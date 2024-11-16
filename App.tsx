import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/screens/HomeScreen';
import { PlantDetailsScreen } from './src/screens/PlantDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'My Plants' }}
        />
        <Stack.Screen 
          name="PlantDetails" 
          component={PlantDetailsScreen} 
          options={{ title: 'Plant Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}