import { View, Text, StyleSheet, Pressable } from "react-native"
import React from "react"
import FontAwesome from "@expo/vector-icons/FontAwesome"

const Button = ({ label, theme, onPress }) => {
  const primary = theme == "primary"
  return (
    <View
      style={[
        styles.buttonContainer,
        primary && {
          borderWidth: 4,
          borderColor: "#ffd33d",
          borderRadius: 18,
        },
      ]}
    >
      <Pressable
        style={[styles.button, primary && { backgroundColor: "#fff" }]}
        onPress={onPress}
      >
        {primary && (
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
        )}
        <Text style={[styles.buttonLabel, primary && { color: "#25292e" }]}>
          {label}
        </Text>
      </Pressable>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
})
