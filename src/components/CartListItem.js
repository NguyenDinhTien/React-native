import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

export default function CartListItem(props) {
  const { cart, sendQuantity } = props;

  function onChangeQuantity(data,change) {
    if (!sendQuantity) return;
    sendQuantity(data,change);
    }

  return (
    <View style={styles.shadow}>
      <View style={styles.container}>
        {/* <Image style={styles.img} source={{uri:products.images[0].url}} /> */}
        <Image style={styles.img} source={{ uri: cart.item.images[0].url }} />
        <View style={styles.info}>
          <Text style={styles.name}>{cart.item.name}</Text>
          <View style={styles.priceRow}>
            <Text style={styles.price}>{cart.item.price}</Text>
          </View>
        </View>
        <View style={styles.quantity}>
          <TouchableOpacity  activeOpacity={0.7}  onPress={() => onChangeQuantity(cart, "decrease")}>
            <Ionicons name="ios-remove-circle" size={30} color={"#9fd236"} />
          </TouchableOpacity>
          <Text style={{ paddingHorizontal: 8, fontWeight: "bold" }}>
            {cart.quantity}
          </Text>
          <TouchableOpacity onPress={() => onChangeQuantity(cart, "increase")}>
            <Ionicons name="ios-add-circle" size={30} color={"#9fd236"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 5,
    marginTop: 25,
    backgroundColor: "whitesmoke",
    marginHorizontal: 16,
  },
  container: {
    margin: 16,
    borderRadius: 4,
    backgroundColor: "#ffff",
    overflow: "hidden",
    flexDirection: "row",
  },
  img: {
    height: 80,
    width: 80,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  info: {
    padding: 8,
    flex: 1,
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
  },
  quantity: {
    marginHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
  },
});
