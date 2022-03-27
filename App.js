import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';

import home from './src/pages/home/Home';
import Routes from './src/routes/routes';

const App = () => {
  const Stack = createNativeStackNavigator()
  return(
   <NavigationContainer>
      <StatusBar 
        backgroundColor={'#915CED'}
      />
      <Routes />
    </NavigationContainer>
  )
}

export default App;