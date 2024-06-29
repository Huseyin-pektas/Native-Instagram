import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import HomeScreen from './screen/Home';
import SearchScreen from './screen/Search';
import ReelScreen from './screen/Reel';
import ShopScreen from './screen/Shop';
import ProfileScreen from './screen/Profile';
import { Avatar, Reelfield } from './Icon';
import avatar from "./../assets/Avatar.png"

import Icon from 'react-native-vector-icons/dist/Ionicons';
import IconN from 'react-native-vector-icons/dist/AntDesign';
const Screen = () => {

  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
      initialRouteName='home'
      screenOptions={{
        tabBarShowLabel: false,
        headerShown:false

      }}
    >
      <Tab.Screen options={{
        tabBarIcon: ({ focused }) => (
          <Icon name={focused ? "home" : "home-outline"}
            size={focused ? 30 : 25}
            color={focused ? "black" : ""} />
        )
      }}
        name='home' component={HomeScreen} />
      <Tab.Screen options={{
        tabBarIcon: ({ focused }) => (
          <Icon name={focused ? "search-sharp" : "search-outline"}
            size={focused ? 30 : 25}
            color={focused ? "black" : ""} />
        )
      }} name='search'
        component={SearchScreen} />

      <Tab.Screen options={{
        tabBarIcon: ({ focused }) => (
          <IconN name="plussquareo"
            size={focused ? 30 : 25}
            color={focused ? "black" : ""} />
        )
      }}
        name='reel'
        component={ReelScreen} />

      <Tab.Screen options={{
        tabBarIcon: ({ focused }) => (
          focused ? <Reelfield size={30} />
            : <Reelfield size={25} />
        )
      }} name='shop' 
      component={ShopScreen} />

      <Tab.Screen
        //  options={{
        //    tabBarIcon: ({ focused }) => (
        //      <Icon name={focused ? "person-circle" : "person-circle-outline"}
        //        size={focused ? 30 : 25}
        //        color={focused ? "black" : ""} />
        //    )
        //  }}
        options={{
          tabBarIcon: ({ focused }) => (<Image 
            style={focused ? styles.focusedAvatar : styles.defaultAvatar} 
            source={avatar} />)
        }}
        name='profil' 
        component={ProfileScreen} />

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  focusedAvatar: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 50,
    width: 30,
    height: 30
  },
  defaultAvatar: {
    border: "none",
    width: 25,
  }

})
export default Screen;
