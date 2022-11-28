import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

interface ProductItemProp {
  product:{
    
  }
}

const ProductScreen = ({product:ProductItemProp}) => {
  return (
    <View>
      <Text>{product.title}</Text>
    </View>
  )
}

export default ProductScreen