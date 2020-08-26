import React, { useState, useEffect } from "react";
import axios from "axios";
import { FlatList, StyleSheet, Tex, View } from "react-native";
import ProductListItem from "../components/ProductListItem";
import { addCartItem } from "../actions/cart";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
//const data = require('../assets/products.json');

export default function Category({ route, navigation }) {
  const [productList, setProductList] = useState([]);

  const { title } = route.params;
  const { categoryId } = route.params;

  navigation.setOptions({ title: title });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`/products?category=${categoryId}`);
        setProductList(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  //send dispatch to reducer

  const dispatch = useDispatch();

  function handlePressBuy(item) {
    const action = addCartItem(item);
    dispatch(action);
   
  }

  // send data product to app
  // function handlePressCart(data) {
  //   if(!handleBuyProduct) return;
  //   handleBuyProduct(data);
  // };

  return (
    <FlatList
      data={productList}
      contentContainerStyle={styles.container}
      numColumns={2}
      renderItem={({ item }) => (
        <View style={styles.wrapper}>
          <ProductListItem product={item} onAddToCartClick={handlePressBuy} />
        </View>
      )}
      keyExtractor={(item) => `${item.id}`}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 16,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 8,
  },
});
