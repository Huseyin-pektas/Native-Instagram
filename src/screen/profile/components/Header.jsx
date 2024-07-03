import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from "react-native-vector-icons/dist/AntDesign"
import Feather from "react-native-vector-icons/dist/Feather"

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5, marginLeft: 10 }}>
                <Text style={styles.UserName}>Username</Text>
                <AntDesign style={styles.IconGroupD} name="down" />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginRight: 10 }}>
                <TouchableOpacity>
                    <AntDesign style={styles.IconGroup} name="plussquareo" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather style={styles.IconGroup} name="menu" />
                </TouchableOpacity>
            </View>
            
              
              </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    UserName: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    },
    IconGroupD: {
        fontSize: 20,

        fontWeight: "bold",
        color: "#000"
    },
    IconGroup: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#000"
    }
})
export default Header;
