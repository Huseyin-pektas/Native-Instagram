import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../../component/Header';
import Stories from '../../component/Stories';
import Pods from '../../component/share/Pods';
import posts from '../../data/posts';
const HomeScreen = () => {
  return (
    <View style={styles.container} >
      <Header />

     <ScrollView>
     <Stories />
      {
        posts?.map((post) => {
          return (
            <Pods key={post.id} post={post} />
          )
        })
      }
      <Pods />
     </ScrollView>
    </View>
  );
}

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  }
})