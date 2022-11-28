import React from 'react'
import { Image, StyleSheet, Text, View,FlatList } from 'react-native'
import ProductItem from '../../componets/ProductItem'
import products from '../../data/products'

const logo = require("assets/lellibella.jpg")

function HomeScreen() {
    return (
        <View style = {styles.pages}>
            <FlatList 
            showsVerticalScrollIndicator={false}
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <ProductItem item={item}
            />}

            />
         
        </View>
    )
}


const styles = StyleSheet.create({
    pages : {
        width:"100%",
        padding:10,
    },
    
})
export default HomeScreen