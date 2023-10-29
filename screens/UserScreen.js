import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MyButton from "../components/MyButton";

const UserScreen = ({ navigation }) => {
  const backBtnHandler = () => {
    navigation.navigate("welcome");
  };

  return (
    <View style={styles.container}>
      <Text>
        This is the <Text style={styles.innerText}>User</Text> screen
      </Text>
      <MyButton onPress={backBtnHandler}>Back</MyButton>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  innerText: {
    color: "#d12e55",
  },
});
