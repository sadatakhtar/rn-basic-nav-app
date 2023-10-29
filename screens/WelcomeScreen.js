import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  const btnHandler = () => {
    navigation.navigate("user");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.maintext}>
        This is the <Text style={styles.innerText}>Welcome</Text> screen
      </Text>
      <View style={styles.innerView}>
        <Button style={styles.btn} title="Next" onPress={btnHandler} />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: "green",
    padding: 30,
    margin: 10,
  },
  innerView: {
    margin: 20,
  },
  mainText: {
    padding: 10,
    marginBottom: 25,
  },
  innerText: {
    color: "green",
  },
  btn: {
    width: "120",
  },
});
