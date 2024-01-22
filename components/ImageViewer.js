import { Image, StyleSheet } from "react-native"
import React from "react"

const ImageViewer = ({ PlaceholderImage, selectedImage }) => {
  const imageSource = selectedImage ? { uri: selectedImage } : PlaceholderImage

  return <Image source={imageSource} style={styles.image} />
}

export default ImageViewer

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
})
