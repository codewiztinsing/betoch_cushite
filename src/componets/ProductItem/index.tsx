import React from 'react'
import { Image, Text, View } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from './styles'

interface ProductItemProps {

    item: {
        id: string;
        title: string;
        image: string;
        avgRating: number;
        ratings: number;
        price: number;
        oldPrice?: number;

    }
};

function ProductItem({item}:ProductItemProps) {
    
  return (
    <View>
          <View style = {styles.root}>
                <Image style = {styles.image} source={{
                    uri:item.image
                    }} />

            <View style = {styles.rightContainer}>
                <Text style = {styles.title}numberOfLines = {3}>{item.title}</Text>
                {/* rating containers */}
                <View style = {styles.ratingContainer}>
                    {
                    [0,0,0,0,0].map((it,i) =>
                     <FontAwesome
                     key={`${it  - i}`} 
                     style = {styles.star} name={i < Math.floor(item.avgRating) ? "star":"star-o"} size={18} color="#C4A000"/>

                    )}

                    
                    <Text>{item.ratings}</Text>
                    

                </View>
                <Text style={styles.price}> from ETB {item.price}</Text>
                {
                    item.oldPrice && (<Text style={styles.oldPrice}>
                        ETB {item.oldPrice}
                        </Text>)
                }
             

            </View>

            </View>
    </View>
  )
}

export default ProductItem