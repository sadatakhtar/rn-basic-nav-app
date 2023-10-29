import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const MyButton = ({ children, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e68e1",
    margin: 20,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
