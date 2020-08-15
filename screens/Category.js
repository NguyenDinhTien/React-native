import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FlatList, StyleSheet, Tex, View } from 'react-native';
import ProductListItem from '../components/ProductListItem';

const data = require('../assets/products.json');


export default function Category({ route, navigation }) {

  // const [productList, setProductList] = React.useState(data.products);
  const [productList, setProductList] = React.useState(data.products);

  const { title } = route.params;
  navigation.setOptions({ title: title });

  useEffect(() => {
    axios.get('http://192.168.1.6:3000/products')
        .then(res=>{
          setProductList(res.data)
        })
        .catch(err=>{
          console.log(err);
        })
      
  }, []);

  return (
    <FlatList
      data={productList}
      contentContainerStyle={styles.container}
      numColumns={2}
      renderItem={({ item }) =>
      <View style={styles.wrapper}>
         <ProductListItem product={item} />
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
