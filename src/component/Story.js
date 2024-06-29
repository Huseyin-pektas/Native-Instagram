import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Story = ({ story }) => {
    return (
        <View key={story.id} style={styles.container} >
            <View >
                <LinearGradient style={styles.cover} colors={["#DE0046", "#F7A34B"]} >
                    <Image source={{ uri: story.user.avatar }}
                        style={styles.avatar} />
                </LinearGradient>
                <Text numberOfLines={1} style={styles.AvatarName}>{story.user.name}</Text>
            </View>
        </View>
    );
}

export default Story;


const styles = StyleSheet.create({
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50
    },
    container: {
        width: 70,
        marginHorizontal: 10
    },
    AvatarName: {
        fontSize: 16,
        fontWeight: "bold"
    },
    cover: {
        width: 65,
        height: 65,
        borderRadius: 33.5,
        justifyContent: "center",
        alignItems: "center"

    },
})