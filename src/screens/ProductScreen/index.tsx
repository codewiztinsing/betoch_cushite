import { View, Text, StyleSheet, ScrollViewBase, ScrollView } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react'
import styles from './styles'
import QuantitySelector from '../../componets/ProductItem/Quantity';
import Button from '../../componets/Buttons';
import ImageCarousel from '../../componets/ImageCarousel';


const ProductScreen = ({ product }) => {
  const [selectedValue, setSelectedValue] = useState(product.options[0])
  const [quantity, setQuantity] = useState(0)
  console.log(selectedValue);

  return (
    <ScrollView >
      {/* title for house */}
      <Text>{product.title}</Text>

      {/* image carousel to show list of house images */}
      <ImageCarousel />

      
      {/* picker for rend or buy */}
      <View style={styles.card}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(option, optionIndex) => { setSelectedValue(option) }}
        >
          {product.options.map((option, index) => <Picker.Item key={index} label={option} value={option} />)}

        </Picker>
      </View>

      <View>
        <Text>{product.price}</Text>
      </View>

      <View style={styles.description}>
        <Text>{product.description}</Text>
      </View>
      {/* quantity selector m */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      {/* buttons for buying and renting house */}
      <Button text="Buy House" handler={() => console.log("buy the house")}/>
      <Button text="Rent House" handler={() => console.log("rent the house")}/>
    </ScrollView>
  )
}




export default ProductScreen 