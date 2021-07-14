import React, { useState } from "react";
import { Text, View, StyleSheet, Vibration, Platform } from "react-native";
import { ProgressBar } from "react-native-paper";
import RoundedButton from "../../components/RoundedButton";
import Colors from "../../utils/Colors";
import CountDownTimer from "../../components/CountDownTimer";
import Timing from "./Timing";
import { useKeepAwake } from "expo-keep-awake";

function Timer({ focusSubject, setFocusSubject }) {
  useKeepAwake();
  const [minutes, setMinutes] = useState(20);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const onProgress = (progress) => {
    setProgress(progress);
  };
  const handleTiming = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };
  const handleVibration = () => {
    if (Platform.OS === "ios") {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 2000);
    } else {
      Vibration.vibrate(2000);
    }
  };
  const onEnd = () => {
    setMinutes(20);
    setProgress(1);
    setIsStarted(false);
    handleVibration();
  };
  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <CountDownTimer
          isPaused={!isStarted}
          onProgress={onProgress}
          minutes={minutes}
          onEnd={onEnd}
        />
        <Text style={styles.subtitle}>Let's Focus On:</Text>
        <Text style={styles.title}>{focusSubject}</Text>
      </View>
      <View style={styles.progressContainer}>
        <ProgressBar
          color={Colors.textColor}
          style={{ backgroundColor: Colors.progressColor, height: 6 }}
          progress={progress}
        />
        <View style={styles.timingContainer}>
          <Timing handleTiming={handleTiming} />
        </View>
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
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.textColor,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.textColor,
  },
  buttonContainer: {
    flex: 0.5,
    flexDirection: "row",
    marginTop: 50,
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
  timeContainer: {
    flex: 0.5,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  progressContainer: {
    flex: 0.5,
    flexDirection: "column",
    justifyContent: "center",
  },
  timingContainer: {
    flex: 0.5,
    flexDirection: "column",
    justifyContent: "center",
  },
});
