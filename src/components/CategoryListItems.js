import React from "react";
import { Text, Image, StyleSheet, TouchableOpacity, View } from "react-native";


import khaivi from "../assets/khaivi.png";
import monchinh from "../assets/monchinh.png";
import trangmieng from "../assets/trangmieng.png";
import thucuong from "../assets/thucuong.png";

function showIconProcduct(id) {
  if (id == 1) return khaivi;
  if (id == 2) return monchinh;
  if (id == 3) return trangmieng;
  return thucuong;
}

const CategoryListItems = (props) => {
  const { category, onPress } = props;

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{category.title}</Text>
        <Image
          style={styles.categoryImage}
          source={showIconProcduct(category.id)}
        ></Image>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
    backgroundColor: "whitesmoke",
    borderRadius: 4,
    marginBottom: 16,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  categoryImage: {
    width: 64,
    height: 64,
  },
  title: {
    fontWeight: "700",
    marginBottom: 8,
    textTransform: "uppercase",
  },
});

export default CategoryListItems;
