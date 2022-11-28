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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions, 
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import product from './src/data/product';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (

    <SafeAreaView>
      {/* <HomeScreen /> */}
      <ProductScreen product={product}/>
    </SafeAreaView>
  
  );
};

const styles = StyleSheet.create({

});

export default App;
