import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import CategoryListItems from '../components/CategoryListItems';

const data = require('../assets/data.json');

export default function Categories({ navigation }) {

  
  const [dataCategoryList, setDataCategoryList] = React.useState(data.categoryList);
  


  return (
    <FlatList
      data={dataCategoryList}
      renderItem={({ item }) =>
        <CategoryListItems
          category={item}
          onPress={() => navigation.navigate('Category',{title: item.title})}
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
