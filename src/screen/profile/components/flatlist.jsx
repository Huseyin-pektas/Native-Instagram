import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView, Dimensions, StyleSheet } from 'react-native';
import posts from '../../../data/posts';

const flatlist = () => {
// burada resmin genişliğini ayarlayıp stunlara böleceğim
const screenWitdth = Dimensions.get("window").width

const columnNum = 3;
const imageSize = (screenWitdth-(columnNum + 1)*2)/columnNum;
    return (
        <>
            <FlatList contentContainerStyle={styles.fhoto}
            numColumns={columnNum}
            keyExtractor={(item,index)=>index.toString()}
             data={posts}
              renderItem={({ item }) => (
                <TouchableOpacity>
                    <Image source={{ uri: item.image }}
                     style={{ width: imageSize, height: imageSize, margin:1 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                <Image source={{ uri: item.image }}
                 style={{ width: imageSize, height: imageSize, margin:1 }} />
            </TouchableOpacity>
            )} />
            

        </>
    );
}

export default flatlist;
const styles = StyleSheet.create({
    fhoto:{
        marginTop:10,
        paddingHorizontal:5
    }
})
