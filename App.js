import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Card } from "react-native-paper";
import Focus from "./src/features/Focus/Focus";
import FocusList from "./src/features/Focus/FocusList";
import Timer from "./src/features/Timer/Timer";

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [subjectsArray, setSubjectsArrray] = useState(null);
  function addFocusSubject(focusItem) {
    setFocusSubject(focusItem);
    setSubjectsArrray(
      subjectsArray ? [...subjectsArray, focusSubject] : [focusSubject]
    );
  }
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => setFocusSubject(null)}
        />
      ) : (
        <View style={styles.focusContainer}>
          <Focus addFocusSubject={addFocusSubject} />
          <FocusList subjectsArray={subjectsArray} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: Constants.statusBarHeight + 80,
    backgroundColor: "#fff",
  },
  focusContainer: {
    flex: 1,
  },
});
