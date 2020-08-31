import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import currency from "../currentcy";

// function formatPrice(num) {
//   const price= "₫ "+ num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
//   //const price = num.toFixed(3);
//   //const price = num + `k`;
//   return price;
// }

const ProductListItem = (props) => {
  const { product, onAddToCartClick } = props;

  function handlePressBuy(item) {
    if (!onAddToCartClick) return;
    // const newItem={
    //   quantity:1,
    //   ...item
    // }
    onAddToCartClick(item);
  }

  return (
    <View style={styles.shadow}>
      <View style={styles.container}>
        {/* <Image style={styles.img} source={{uri:products.images[0].url}} /> */}
        <Image style={styles.img} source={{ uri: product.images[0].url }} />
        <View style={styles.info}>
          <Text style={styles.name}>{product.name}</Text>
          <View style={styles.priceRow}>
            <Text style={styles.price}>{currency(product.price)}</Text>
            <TouchableOpacity onPress={() => handlePressBuy(product)}>
              <Text style={styles.cartText}>Mua +</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 5,
  },
  container: {
    marginBottom: 20,
    borderRadius: 4,
    backgroundColor: "#ffff",
    overflow: "hidden",
  },
  img: {
    height: 150,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  info: {
    padding: 8,
  },
  name: {
    fontSize: 16,
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 16,
    color: "#888",
  },
  cartText: {
    textTransform: "uppercase",
    fontSize: 16,
    color: "#2f95dc",
    shadowOpacity: 0,
  },
});

export default ProductListItem;
