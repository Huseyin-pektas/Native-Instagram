import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import stories from '../data/stories';
import Story from './Story';
const Stories = () => {
    return (
        <View style={styles.stories} >
            <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {stories.map((story) => {
                    return (
                        <Story story={story} />
                    )
                })}
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({

    stories: {
paddingVertical:10
    }
})

export default Stories;
