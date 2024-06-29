import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FitImage({src}) {

    // dimension pencerenin genişliğini gösterir.
    const width = Dimensions.get("window").width;
   
    const ratio = 1080/width;
    const height = 607/ratio;
  return (
  <Image style={{width,height}}
  source={{uri:src}}
  />
  )
}

const styles = StyleSheet.create({
   
})