import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FlatList, StyleSheet } from 'react-native';
import CategoryListItems from '../components/CategoryListItems';
//const data = require('../assets/data.json');

export default function Categories({ navigation }) {

  // const [dataCategoryList, setDataCategoryList] = React.useState(data.categoryList);
  const [dataCategoryList, setDataCategoryList] = React.useState([]);

  useEffect(() => {
    axios.get('/categoryList')
        .then(res=>{
          setDataCategoryList(res.data)
        })
        .catch(err=>{
          console.log(err);
        })
      
  },[]);

  return (
    <FlatList
      data={dataCategoryList}
      renderItem={({ item }) =>
        <CategoryListItems
          category={item}
          onPress={() => navigation.navigate('Category', { title: item.title,categoryId:item.id })}
        />}
      keyExtractor={(item) => `${item.id}`}
      contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
    />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#ffff',
    alignItems: 'stretch',
    justifyContent: 'center',

  },
});
