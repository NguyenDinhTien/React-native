import React from 'react';
import { FlatList, StyleSheet, Tex, View } from 'react-native';
import ProductListItem from '../components/ProductListItem';

const data = require('../assets/products.json');


export default function Category({ route, navigation }) {

  const [productList, setProductList] = React.useState(data.products);
  const { title } = route.params;
  navigation.setOptions({ title: title });

  
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
