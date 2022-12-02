import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../src/screens/HomeScreen';
import ProductScreen from '../src/screens/ProductScreen';
import Payment from '../src/screens/Payment';



   const Stack = createStackNavigator();
   export default function Navigation() {
     return (
       <NavigationContainer>
         <Stack.Navigator>
       
           <Stack.Screen name="Home" component={HomeScreen} />
           <Stack.Screen name="Payment" component={Payment} />
           <Stack.Screen name="Product" component={ProductScreen} />
         </Stack.Navigator>
       </NavigationContainer>
      );
    }