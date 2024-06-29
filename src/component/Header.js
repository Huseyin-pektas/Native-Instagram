//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Logo, Messenger } from '../Icon';
import Iconn from 'react-native-vector-icons/dist/AntDesign';
// create a component
const Header = () => {
    return (
        <View style={styles.container}>
            <Logo />
            <View style={styles.ıcon} >
                <TouchableOpacity>
                    <View style={styles.dotcontainer} >
                        <View style={styles.dot} />
                    </View>
                    <Iconn name="hearto" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Iconn name="plussquareo" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.dotcontainer} >
                        <View style={styles.dot} />
                    </View>
                    <Messenger />
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 44
    },
    ıcon: {
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 20,
        margin: 10
    },
    dotcontainer:{
        position:"absolute",
        right:0,
        zIndex:1,
        backgroundColor:"white",
        width:12,
        justifyContent:"center",
        alignItems:"center",
        height:12
    },
    dot:{
        backgroundColor:"red",
        height:10,
        width:10,
        borderRadius:8
    }
});


export default Header;
