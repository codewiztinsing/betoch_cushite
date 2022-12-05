import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';



const Drawer = createDrawerNavigator();

export default function DrawerApp() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={SignupScreen} />
        <Drawer.Screen name="Notifications" component={LoginScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}