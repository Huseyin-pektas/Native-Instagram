
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AntDesign from "react-native-vector-icons/dist/AntDesign"
import Feather from "react-native-vector-icons/dist/Feather"
import Header from './components/Header';


const ProfileScreen = () => {
    return (
        <ScrollView style={styles.container}>
            
            <Header/>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: "white"
    },
    
});

export default ProfileScreen;
