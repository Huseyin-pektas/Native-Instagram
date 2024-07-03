import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

const ProfileStory = () => {
    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <View style={styles.content} >
                <View style={styles.container}>
                <Image style={styles.ımage}
                 source={{ uri: 'https://randomuser.me/api/portraits/men/7.jpg' }} />
                </View>
                <Text style={styles.text}>Story 1</Text>
            </View>
            <View style={styles.content} >
                <View style={styles.container}>
                <Image style={styles.ımage}
                 source={{ uri: 'https://randomuser.me/api/portraits/men/7.jpg' }} />
                </View>
                <Text style={styles.text}>Story 1</Text>
            </View>
            <View style={styles.content} >
                <View style={styles.container}>
                <Image style={styles.ımage}
                 source={{ uri: 'https://randomuser.me/api/portraits/men/7.jpg' }} />
                </View>
                <Text style={styles.text}>Story 1</Text>
            </View>
            <View style={styles.content} >
                <View style={styles.container}>
                <Image style={styles.ımage}
                 source={{ uri: 'https://randomuser.me/api/portraits/men/7.jpg' }} />
                </View>
                <Text style={styles.text}>Story 1</Text>
            </View>
            <View style={styles.content} >
                <View style={styles.container}>
                <Image style={styles.ımage}
                 source={{ uri: 'https://randomuser.me/api/portraits/men/7.jpg' }} />
                </View>
                <Text style={styles.text}>Story 1</Text>
            </View>
            <View style={styles.content} >
                <View style={styles.container}>
                <Image style={styles.ımage}
                 source={{ uri: 'https://randomuser.me/api/portraits/men/7.jpg' }} />
                </View>
                <Text style={styles.text}>Story 1</Text>
            </View>
            <View style={styles.content} >
                <View style={styles.container}>
                <Image style={styles.ımage}
                 source={{ uri: 'https://randomuser.me/api/portraits/men/7.jpg' }} />
                </View>
                <Text style={styles.text}>Story 1</Text>
            </View>
            <View style={styles.content} >
                <View style={styles.container}>
                <Image style={styles.ımage}
                 source={{ uri: 'https://randomuser.me/api/portraits/men/7.jpg' }} />
                </View>
                <Text style={styles.text}>Story 1</Text>
            </View>
            <View style={styles.content} >
                <View style={styles.container}>
                <Image style={styles.ımage}
                 source={{ uri: 'https://randomuser.me/api/portraits/men/7.jpg' }} />
                </View>
                <Text style={styles.text}>Story 1</Text>
            </View>
            <View style={styles.content} >
                <View style={styles.container}>
                <Image style={styles.ımage}
                 source={{ uri: 'https://randomuser.me/api/portraits/men/7.jpg' }} />
                </View>
                <Text style={styles.text}>Story 1</Text>
            </View>
           
        </ScrollView>
    );
}

export default ProfileStory;

const styles = StyleSheet.create({
    content:{
        justifyContent:"center",
        alignItems:"center"
    },
    container: {
        width: 85,
        height: 85,
        borderColor: "gray",
        borderRadius: 42.5,
        borderWidth: 1,
        padding:10,
        marginLeft:15,
        justifyContent:"center",
        alignItems:"center",
        marginTop:10
    },
    ımage: {
        marginTop:3,
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    text:{
        fontSize:16,
        fontWeight:"bold",
        color:"#000000"
    }
})
