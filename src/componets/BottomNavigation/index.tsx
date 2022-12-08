import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//screens
import HomeScreen from '../../screens/HomeScreen';
import Payment from '../../screens/Payment';
import LoginScreen from '../../../auth/screens/LoginScreen';
import SignupScreen from '../../../auth/screens/SignupScreen';
import ChatScreen from '../../screens/ChatScreen';
import ProductScreen from '../../screens/ProductScreen';



const Tab = createBottomTabNavigator();
const BottomNavigation = () => {

const [logged ,setLogged] = useState(true);
  return (
    <NavigationContainer>
    <Tab.Navigator>

    <Tab.Screen name='Home' component={HomeScreen}
        options={
          {
            tabBarLabel:'Home',
            headerShown:false,
            tabBarIcon:({color,size}) => (
              <MaterialCommunityIcons name='home' color={color} size={size}/>
            )
          }
        }
        />

<Tab.Screen name='Prouduct' component={ProductScreen}
        options={
          {
            tabBarLabel:'Product',
            headerShown:false,
            tabBarIcon:({color,size}) => (
              <MaterialCommunityIcons name='home' color={color} size={size}/>
            )
          }
        }
        />

        <Tab.Screen name='Login' component={LoginScreen}
        options={
          {
            tabBarLabel:'Login',
            headerShown:false,
            tabBarIcon:({color,size}) => (
              <MaterialCommunityIcons name='home' color={color} size={size}/>
            )
          }
        }
        />
        {
          logged && (
            <>
           
        <Tab.Screen name='Register' component={SignupScreen}
         options={
          {
            tabBarLabel:'Register',
            headerShown:false,

            tabBarIcon:({color,size}) => (
              <MaterialCommunityIcons name='chat' color={color} size={size}/>
            )
          }
        }
        />
        <Tab.Screen name='Payment' component={Payment}
                 options={
          {
            tabBarLabel:'Payment',
            headerShown:false,
            tabBarIcon:({color,size}) => (
              <MaterialCommunityIcons name='contactless-payment' color={color} size={size}/>
            )
          }
        }
        
        />
        <Tab.Screen name='Chat' component={ChatScreen}
        
        options={
          {
            tabBarLabel:'Chat',
            headerShown:false,
            tabBarIcon:({color,size}) => (
              <MaterialCommunityIcons name='chat' color={color} size={size}/>
            )
          }
        }
        />
        </>
          )
        }
    </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomNavigation;

const styles = StyleSheet.create({})