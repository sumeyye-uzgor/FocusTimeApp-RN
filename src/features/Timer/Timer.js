import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { TextInput } from "react-native-paper";
import RoundedButton from "../../components/RoundedButton";

function Timer({ focusSubject, setFocusSubject }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's Focus On: {focusSubject}</Text>
      <Text style={styles.timer}>20.00</Text>

      <View style={styles.inputContainer}>
        <RoundedButton text="Cancel" onPress={() => setFocusSubject(null)} />
      </View>
    </View>
  );
}

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  timer: {
    marginTop: 30,
    fontSize: 120,
    backgroundColor: "rgba( 210, 30, 50, 0.3 )",
    borderRadius: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 50,
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    marginRight: 25,
  },
});
