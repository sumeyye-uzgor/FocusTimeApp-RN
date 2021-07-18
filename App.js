import React, { useEffect, useState } from "react";
import uuid from "react-native-uuid";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Focus from "./src/features/Focus/Focus";
import FocusList from "./src/features/Focus/FocusList";
import Timer from "./src/features/Timer/Timer";

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  function addFocusSubject(focusItem) {
    const id = uuid.v4();
    setFocusSubject({ title: focusItem, isComplete: false, id: id });
    setFocusHistory([
      ...focusHistory,
      { title: focusItem, isComplete: false, id: id },
    ]);
  }
  function focusEndSuccess(id) {
    setFocusSubject(null);
    setFocusHistory(
      focusHistory.map((subject) =>
        subject.id === id ? { ...subject, isComplete: true } : subject
      )
    );
  }
  const saveFocusHistory = async () => {
    try {
      await AsyncStorage.setItem("focusHistory", JSON.stringify(focusHistory));
    } catch (e) {
      console.log(e);
    }
  };
  const loadFocusHistory = async () => {
    try {
      const history = await AsyncStorage.getItem("focusHistory");
      if (history && JSON.parse(history).length) {
        console.log("hre is if");
        setFocusHistory(JSON.parse(history));
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    loadFocusHistory();
  }, []);
  useEffect(() => {
    saveFocusHistory();
  }, [focusHistory]);
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject.title}
          onTimerEnd={() => setFocusSubject(null)}
          focusEndSuccess={() => focusEndSuccess(focusSubject.id)}
        />
      ) : (
        <View style={styles.focusContainer}>
          <Focus addFocusSubject={addFocusSubject} />
          <FocusList
            focusHistory={focusHistory}
            onClear={() => setFocusHistory([])}
          />
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
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
