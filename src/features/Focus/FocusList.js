import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

export default function FocusList({ subjectsArray }) {
  return (
    <View style={styles.container}>
      {subjectsArray ? (
        subjectsArray.map((sub, idx) => <Text key={idx}>{sub}</Text>)
      ) : (
        <Text>Nothing to show here!</Text>
      )}
    </View>
  );
}

const styles = {
  container: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
};
