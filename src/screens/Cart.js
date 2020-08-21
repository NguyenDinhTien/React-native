import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import CartListItem from "../components/CartListItem";

export default function Cart() {
  return (
    <View>
      <CartListItem />
    </View>
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
