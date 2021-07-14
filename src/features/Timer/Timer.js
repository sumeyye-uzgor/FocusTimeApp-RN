import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { TextInput } from "react-native-paper";
import RoundedButton from "../../components/RoundedButton";
import Colors from "../../utils/Colors";
import CountDownTimer from "../../components/CountDownTimer";
function Timer({ focusSubject, setFocusSubject }) {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Let's Focus On:</Text>
      <Text style={styles.title}>{focusSubject}</Text>
      <CountDownTimer isPaused={!isStarted} />

      <View style={styles.buttonContainer}>
        {!isStarted ? (
          <RoundedButton text="Start" onPress={() => setIsStarted(true)} />
        ) : (
          <RoundedButton text="Pause" onPress={() => setIsStarted(false)} />
        )}
        <RoundedButton text="Stop" onPress={() => setFocusSubject(null)} />
      </View>
    </View>
  );
}

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subtitle: {
    flex: 0.1,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.textColor,
  },
  title: {
    flex: 0.3,
    fontSize: 46,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.textColor,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 50,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
