import React from "react";
import { View, StyleSheet } from "react-native";
import RoundedButton from "../../components/RoundedButton";

function Timing({ handleTiming }) {
  return (
    <View style={styles.buttonContainer}>
      <RoundedButton text="0.1" size={100} onPress={() => handleTiming(0.1)} />
      <RoundedButton text="15" size={100} onPress={() => handleTiming(15)} />
      <RoundedButton text="20" size={100} onPress={() => handleTiming(20)} />
      <RoundedButton text="30" size={100} onPress={() => handleTiming(30)} />
    </View>
  );
}

export default Timing;

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 50,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
