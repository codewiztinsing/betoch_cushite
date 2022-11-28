import { View, Text } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react'
import styles from './styles'
import QuantitySelector from '../../componets/ProductItem/Quantity';


const ProductScreen = ({ product }) => {
  const [selectedValue,setSelectedValue] = useState(product.options[0])
  const [quantity,setQuantity] = useState(0)
  console.log(selectedValue);
  
  return (
    <View>
      {/* title for house */}
      <Text>{product.title}</Text>
      {/* picker for rend or buy */}

      <View style={styles.card}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(option,optionIndex) => {setSelectedValue(option)}}
        >
          {product.options.map((option, index) => <Picker.Item key={index} label={option} value={option} />)}

        </Picker>
      </View>

      <View>
          <Text style={styles.description}>{product.description}</Text>
      </View>

      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
    </View>
  )
}





export default ProductScreen 