import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
const logo = require("assets/lellibella.jpg")

function HomeScreen() {
    return (
        <View style = {styles.pages}>
            <View style = {styles.root}>
                {/* <Image style = {styles.image} source={{
                    uri:'https://whc.unesco.org/uploads/thumbs/site_0018_0016-750-750-20151104173458.jpg'
                    }} /> */}

                <AntDesign style = {styles.image} name="home" size={100} />
            <View style = {styles.rightContainer}>
                <Text style = {styles.title}numberOfLines = {3}>Logitech MX Master 3 Advanced Wireless Mouse for Mac - Bluetooth/USB</Text>
                {/* rating containers */}
                <View style = {styles.ratingContainer}>
                    <FontAwesome style = {styles.star} name="star" size={18} color="#C4A000"/>
                    <FontAwesome style = {styles.star} name="star" size={18} color="#C4A000"/>
                    <FontAwesome style = {styles.star} name="star" size={18} color="#C4A000"/>
                    <FontAwesome style = {styles.star}name="star-half-full" size={18} color="#C4A000"/>
                    <FontAwesome style = {styles.star} name="star-o" size={18} color="#C4A000"/>
                    <Text>130032</Text>
                    

                </View>
                <Text style={styles.price}> from $1 million</Text>
                <Text style={styles.oldPrice}>$1.5 million</Text>

            </View>

            </View>
       
        </View>
    )
}


const styles = StyleSheet.create({
    pages : {
        width:"100%",
        padding:10,
        

    },
    root : {
        flexDirection:"row",
        width:"100%",
        borderWidth:1,
        borderColor:"#285032",
        borderRadius:10,
       

    },

    rightContainer: {
        flex:3,
        backgroundColor:"#fff"

    },
    title: {
        fontSize:18,
    },

    price:{
        fontSize:18,
        fontWeight:"bold"
    },
    oldPrice:{

        fontSize:12,
        fontWeight:"normal",
        textDecorationLine:"line-through",
        marginLeft:4
    },
    image : {
        flex:2,
        height:150,
        resizeMode:"contain",

    },
    ratingContainer : {
        flexDirection:"row",
        alignItems:"center",
        marginVertical:10,

    },
    star :{
        margin:2
    }
})
export default HomeScreen