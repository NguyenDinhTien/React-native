import { StatusBar } from "expo-status-bar";
import axios from "axios";
import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import AppNavigator from "./AppNavigator";


axios.defaults.baseURL = "http://192.168.1.14:3000";

export default function App() {
  const [itemList, setItemList] = useState([]);

  function handleBuyProduct(data) {
    const newItem = {
      id: data.id,
      name: data.name,
      price: data.price,
      quantity: 1,
    };
    const newItemList = [...itemList];
    newItemList.push(newItem);
    setItemList(newItemList);
  }
  console.log(itemList);

  const user = { name: "Tania", loggedIn: true };
  return (
    
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#ffff",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
