import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../src/screens/HomeScreen';
import ProductScreen from '../src/screens/ProductScreen';
import Payment from '../src/screens/Payment';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';



   const Stack = createStackNavigator();
   export default function Navigation() {
     return (
       <NavigationContainer>
         <Stack.Navigator
            
         >
           <Stack.Screen name="Login" component={LoginScreen}
           
           
           />
           <Stack.Screen name="Register" component={SignupScreen} />
           <Stack.Screen name="Home" component={HomeScreen} />
           <Stack.Screen name="Payment" component={Payment} />
           <Stack.Screen name="Product" component={ProductScreen} />
         </Stack.Navigator>
       </NavigationContainer>
      );
    }