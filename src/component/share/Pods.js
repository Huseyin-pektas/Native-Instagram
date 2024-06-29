import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import IconI from 'react-native-vector-icons/dist/Ionicons';
import IconF from 'react-native-vector-icons/dist/Feather';
import FitImage from './FitImage';
import ReadMore from '@fawazahmed/react-native-read-more';

const Pods = ({ post }) => {

    return (
        <View style={styles.post}>
            <ScrollView horizontal={true}
            >
                <View style={styles.header} >

                    <View style={styles.container} >
                        <Image
                            style={styles.Image}
                            source={{ uri: post?.user?.avatar }}
                        // source={require("./../../../assets/Avatar.png")} 
                        />
                        <Text style={styles.text} >{post?.user?.name}</Text>
                    </View>

                    <Icon name="ellipsis1" size={30} color="black" />
                </View>
            </ScrollView>
            <FitImage src={post?.image} />
            <View>
                <View style={styles.IconContent} >
                    <View style={styles.ıcongroup}>
                        <TouchableOpacity>
                            <Icon name="hearto" color="black" size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="message1" size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <IconF name="send" size={30} />
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity>
                        <IconI name="bookmark" color="red" size={30} />

                    </TouchableOpacity>
                </View>
                <Text style={{ marginLeft: 20, fontWeight:"bold",fontSize:16}}>{post?.likes} Likes</Text>
                <View>
                    <ReadMore 
                    seeLessStyle={{color: "#999"}}
                    seeLessText='Daha az'
                    seeMoreText='Daha fazla'
                    numberOfLines={1}
                    seeMoreStyle={{color: "#999"}}
                    >
                    <Text  style={{fontSize:16,fontWeight:"bold", }}> 
                {post?.user.name}{`     `}{post?.description}
                    {/* Bu resim harika ya, çok beğendim.
                        Daha önce de resim görmüştüm ama
                        bunun gibisini ilk defa görüyorum.Bunun gibi daha fazla
                        resim atmanızı istiyorum. */}

                    </Text>
                    </ReadMore>
                    {
                        post?.comments > 0 && (
                            <TouchableOpacity>
                                <Text style={{opacity:0.5,marginTop:7}} >View all {post?.comments} comments</Text>
                            </TouchableOpacity>
                        )
                    }
                    <View>
                        <Text>{post?.date}</Text>
                        <Text>See translation</Text>
                    </View>

                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    post: {
        marginBottom: 30
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
        paddingHorizontal: 15,
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        margin: 10,
    },
    Image: {
        width: 30,
        height: 30,
        marginRight: 10,
        borderRadius: 30
    },
    text: {
        fontSize: 17,
        fontWeight: "bold"
    },
    IconContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10
    },
    ıcongroup: {
        flexDirection: "row",
        marginHorizontal: 10,
        gap: 15
    }

})
export default Pods;
