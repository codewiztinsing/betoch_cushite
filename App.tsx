import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

import React from 'react';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Navigation from './auth';
import BottomNavigation from './src/componets/BottomNavigation';
import DrawerNavigation from './src/componets/DrawerNavigation';




const App = () => {
  const isDarkMode = useColorScheme() === 'dark';



  return (
      <BottomNavigation />
      // <DrawerNavigation />
    
  );
};

const styles = StyleSheet.create({

});

export default App;
