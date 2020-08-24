import React, { useState, useEffect,useContext} from 'react';
import axios from 'axios';
import { FlatList, StyleSheet, Tex, View } from 'react-native';
import ProductListItem from '../components/ProductListItem';
import { addCartItem } from "../actions/cart";

//const data = require('../assets/products.json');


export default function Category({ route, navigation }) {


  const [productList, setProductList] = useState([]);

  const { title } = route.params;
  const {categoryId}=route.params;
  

  navigation.setOptions({ title: title });

  useEffect(() => {
    
    axios.get(`/products?category=${categoryId}`)
        .then(res=>{
          setProductList(res.data);
          
        })
        .catch(err=>{
          console.log(err);
        })
      
  }, []);


  
  const handlePressBuy=(data)=>{
    const action=addCartItem(data)
    dispatchEvent(action);
  };

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
      renderItem={({ item }) =>
      <View style={styles.wrapper}>
         <ProductListItem product={item} onAddToCartClick={handlePressBuy} />
      </View>
      }
      keyExtractor={(item) => `${item.id}`}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:8,
    paddingTop:16    
  },
  wrapper:{
    flex:1,
    paddingHorizontal:8
  }
});
