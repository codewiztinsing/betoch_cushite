import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Navigation from '.';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Landing" component={Navigation} />
    
    </Drawer.Navigator>
  );
}

export default MyDrawer