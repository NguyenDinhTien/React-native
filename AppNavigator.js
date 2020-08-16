import React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from './screens/Cart';
import Order from './screens/Order';
import Settings from './screens/Settings';
import Category from './screens/Category';
import Categories from './screens/Categories';




const homeStack=createStackNavigator()

function homeStackScreen(){
  return(
    <homeStack.Navigator>
      <homeStack.Screen
        name="Home"
        component={Categories}
        options={{ title: 'Home' }}
      />
      <homeStack.Screen
        name="Category"
        component={Category}
        // options={{ title: 'Home' }}
      />
    </homeStack.Navigator>
  )
}

const Tab= createBottomTabNavigator();

export default function AppNavigator() {
  
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={homeStackScreen} />
        <Tab.Screen name="Settings" component={Settings} /> 
        <Tab.Screen name="Order" component={Order} />
        <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
}