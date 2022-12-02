import 'react-native-gesture-handler';
import Icon  from 'react-native-vector-icons/FontAwesome';
import React, {type PropsWithChildren} from 'react';


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
import ProductScreen from './src/screens/ProductScreen';
import MyDrawer from './auth/drawer';




const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

 

  return (

   <Navigation />
     
     
    
  
  );
};

const styles = StyleSheet.create({

});

export default App;
