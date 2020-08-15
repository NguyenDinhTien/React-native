import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import Burger from "../assets/burger.png"



const CategoryListItems = (props) => {
    const { category, onPress } = props;

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={onPress}
        >
            <View style={styles.container}>
                <Text style={styles.title}>{category.title}</Text>
                <Image style={styles.categoryImage} source={Burger}></Image>

            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'whitesmoke',
        borderRadius: 4,
        marginBottom: 16,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5
    },
    categoryImage: {
        width: 64,
        height: 64
    },
    title: {
        fontWeight: "700",
        marginBottom: 8,
        textTransform: 'uppercase'
    }
});


export default CategoryListItems;