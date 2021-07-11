import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Card } from "react-native-paper";
import Focus from "./src/features/Focus";
import FocusList from "./src/features/FocusList";

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  function addFocusSubject(focusItem) {
    setFocusSubject(focusSubject ? [...focusSubject, focusItem] : [focusItem]);
  }
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <View>
          <Text>Timer goes here!</Text>
        </View>
      ) : (
        <View style={styles.focusContainer}>
          <Focus addFocusSubject={addFocusSubject} />
          <FocusList focusArray={focusSubject} />
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
    backgroundColor: "#ecf0f1",
  },
  focusContainer: {
    flex: 1,
  },
});
