import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileBio = () => {
  return (
    <View style ={styles.bio}>
      <Text style={styles.name}>Emile Martinez</Text>
      <Text style={styles.lorem} >Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Nobis fugit ab dignissimos sunt eius molestiae laboriosam, blanditiis, officiis vitae rerum enim, ex quibusdam. 
        Dolorem maiores quo facilis beatae quae. Quaerat.</Text>
      <Text style={styles.link}>Link goes here</Text>
      <TouchableOpacity activeOpacity={0.5} style={styles.opacity}>
        <Text style={styles.OpacityText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ProfileBio;
const styles = StyleSheet.create({
  bio:{
    paddingHorizontal:15
  },
  name:{
    fontWeight:"bold",
    fontSize:17,
    color:"#000000"
  },
  lorem:{
    paddingVertical:10
  },
  link:{
    fontWeight:"bold",
    color:"#00008B",
    marginBottom:10
  },
  opacity:{
    borderWidth:1,
    borderColor:"gray",
    borderRadius:5,
    padding:10,
    justifyContent:"center",
    alignItems:"center",
  },
  OpacityText:{
    fontSize:20,
    fontWeight:"bold",
    color:"#000000"
  }
})