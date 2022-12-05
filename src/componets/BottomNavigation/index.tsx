import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import HomeScreen from '../../screens/HomeScreen';
import Payment from '../../screens/Payment';
import LoginScreen from '../../../auth/screens/LoginScreen';
import SignupScreen from '../../../auth/screens/SignupScreen';
import ChatScreen from '../../screens/ChatScreen';



const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name='Login' component={LoginScreen}/>
        <Tab.Screen name='Register' component={SignupScreen}/>
        <Tab.Screen name='Payment' component={Payment}/>
        <Tab.Screen name='Chat' component={ChatScreen}/>

    </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomNavigation;

const styles = StyleSheet.create({})