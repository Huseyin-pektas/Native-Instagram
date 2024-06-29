/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
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
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Screen from './src/Screen';


function App() {



  return (
   <SafeAreaView style={styles.Container} >
     <NavigationContainer>
      <Screen/>
    </NavigationContainer>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex:1
  }
});

export default App;
