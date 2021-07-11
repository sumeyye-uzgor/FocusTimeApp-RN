import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { TextInput } from "react-native-paper";
import RoundedButton from "../../components/RoundedButton";
import Colors from "../../utils/Colors";

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
    textAlign: "center",
    color: Colors.textColor,
  },
  timer: {
    marginTop: 30,
    fontSize: 120,
    backgroundColor: Colors.bgColor,
    borderRadius: 10,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.textColor,
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
