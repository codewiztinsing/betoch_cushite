import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import ProductItem from '../../componets/ProductItem'
import products from '../../data/products'

const logo = require("assets/lellibella.jpg")

function HomeScreen() {
    return (
        <View style = {styles.pages}>
            <ProductItem item={products[0]}/>
         
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