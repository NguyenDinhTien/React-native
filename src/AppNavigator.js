import React from "react";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "./screens/Cart";
import Order from "./screens/Order";
import Settings from "./screens/Settings";
import Category from "./screens/Category";
import Categories from "./screens/Categories";
import { Ionicons } from "@expo/vector-icons";

const homeStack = createStackNavigator();

function homeStackScreen() {
  return (
    <homeStack.Navigator>
      <homeStack.Screen
        name="Home"
        component={Categories}
        options={{ title: "Home" }}
      />
      <homeStack.Screen
        name="Category"
        component={Category}
        // options={{ title: 'Home' }}
      />
    </homeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return (
              <Ionicons
                name={focused ? "md-home" : "md-home"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Settings") {
            return (
              <Ionicons
                name={focused ? "md-settings" : "md-settings"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Cart") {
            return (
              <Ionicons
                name={focused ? "ios-cart" : "ios-cart"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Order") {
            return (
              <Ionicons
                name={focused ? "md-reorder" : "md-reorder"}
                size={size}
                color={color}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={homeStackScreen} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
