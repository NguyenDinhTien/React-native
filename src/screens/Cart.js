import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { View, Text, FlatList, StyleSheet } from "react-native";
import CartListItem from "../components/CartListItem";





export default function Cart() {

  const List = useSelector((state) => state.cart.list);
  console.log(List);

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
