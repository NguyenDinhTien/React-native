import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Category from './screens/Category'
import Categories from './screens/Categories'


const Stack = createStackNavigator();

export default function AppNavigator() {

  
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Categories}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="Category"
        component={Category}
        // options={{ title: 'Home' }}
      />
    </Stack.Navigator>

  );
}