import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { View, Text, FlatList, StyleSheet } from "react-native";
import CartListItem from "../components/CartListItem";
import {updateQuantity} from "../actions/cart";

export default function Cart() {
  const newItem = useSelector((state) => state.cart.list);
  const dispatch = useDispatch();

  function handleQuantity(data, change) {
    const productId=data.item.id;
    const action = updateQuantity(productId, change);
    dispatch(action);
    //console.log(data.item.id);
    // console.log(change);
    //  const handleQuantity=(data)=>{
    //     console.log(data);
  }

  return (
    <FlatList
      data={newItem}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.wrapper}>
          <CartListItem cart={item} sendQuantity={handleQuantity} />
        </View>
      )}
      //keyExtractor={(item) => `${item.id}`}
      keyExtractor={(item, index) => String(index)}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
  },
});
