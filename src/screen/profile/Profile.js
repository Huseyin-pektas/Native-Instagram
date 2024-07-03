
import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    ScrollView,
    TouchableOpacity,
    FlatList, Image
} from 'react-native';
import AntDesign from "react-native-vector-icons/dist/AntDesign"
import Feather from "react-native-vector-icons/dist/Feather"
import Header from './components/Header';
import ProfileInfo from './components/ProfileInfo';
import ProfileBio from './components/ProfileBio';
import ProfileStory from './components/ProfileStory';
import Flatlistt from "./components/flatlist"

const ProfileScreen = () => {

   

    return (

        <ScrollView style={styles.container}>
            <Header />
            <ProfileInfo />
            <ProfileBio />
            <ProfileStory />
            <Flatlistt/>
        </ScrollView>

    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: "white"
    },

});

export default ProfileScreen;
