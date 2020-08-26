import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { View, Text, FlatList, StyleSheet } from "react-native";
import CartListItem from "../components/CartListItem";

export default function Cart() {
  const newItem = useSelector((state) => state.cart.list);
  

  return (
    <FlatList
      data={newItem}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.wrapper}>
          <CartListItem value={item} />
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
