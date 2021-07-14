import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { ProgressBar } from "react-native-paper";
import RoundedButton from "../../components/RoundedButton";
import Colors from "../../utils/Colors";
import CountDownTimer from "../../components/CountDownTimer";

function Timer({ focusSubject, setFocusSubject }) {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const onProgress = (progress) => {
    setProgress(progress);
  };
  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <CountDownTimer isPaused={!isStarted} onProgress={onProgress} />
        <Text style={styles.subtitle}>Let's Focus On:</Text>
        <Text style={styles.title}>{focusSubject}</Text>
      </View>
      <View style={styles.progressContainer}>
        <ProgressBar
          color={Colors.textColor}
          style={{ backgroundColor: Colors.progressColor, height: 6 }}
          progress={progress}
        />
        <View style={styles.buttonContainer}>
          {!isStarted ? (
            <RoundedButton text="Start" onPress={() => setIsStarted(true)} />
          ) : (
            <RoundedButton text="Pause" onPress={() => setIsStarted(false)} />
          )}
          <RoundedButton text="Stop" onPress={() => setFocusSubject(null)} />
        </View>
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
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.textColor,
  },
  title: {
    fontSize: 46,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.textColor,
  },
  buttonContainer: {
    flex: 0.6,
    flexDirection: "row",
    marginTop: 50,
    alignItems: "center",
    justifyContent: "space-around",
  },
  timeContainer: {
    flex: 0.6,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  progressContainer: {
    flex: 0.4,
    flexDirection: "column",
    justifyContent: "center",
  },
});
