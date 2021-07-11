import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Colors from "../../utils/Colors";

export default function FocusList({ subjectsArray }) {
  return (
    <View style={styles.container}>
      {subjectsArray ? (
        subjectsArray.map((sub, idx) => (
          <Text style={styles.text} key={idx}>
            {sub}
          </Text>
        ))
      ) : (
        <Text style={styles.text}>Nothing to show here!</Text>
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
  text: {
    fontSize: 30,
    color: Colors.textColor,
  },
};
