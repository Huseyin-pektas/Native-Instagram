import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

export default function ProfileInfo() {
    return (
        <View style={styles.Info} >

            <LinearGradient style={styles.cover} colors={["#DE0046", "#F7A34B"]}>
                <Image source={{ uri: "https://randomuser.me/api/portraits/women/6.jpg" }}
                    style={styles.avatar} />
            </LinearGradient>
            <View style={styles.starts} >
                <Text style={styles.starNumber}>1.451</Text>
                <Text style={styles.starLaberl}>Post</Text>
            </View>
            <View style={styles.starts} >
                <Text style={styles.starNumber}>3.245</Text>
                <Text style={styles.starLaberl}>Following</Text>
            </View>
            <View style={styles.starts} >
                <Text style={styles.starNumber}>4.245</Text>
                <Text style={styles.starLaberl}>Followers</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    Info: {

        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    cover: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    starts: {
        justifyContent: "center",
        alignItems: "center"
    },
    starNumber: {
        fontSize: 19,
        fontWeight: "bold",
        color:"black"
    },
    starLaberl: {
        fontSize: 15,
        fontWeight: "600"
    }
})