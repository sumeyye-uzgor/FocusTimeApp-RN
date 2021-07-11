import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { TextInput } from "react-native-paper";
import RoundedButton from "../components/RoundedButton";

function Focus({ addFocusSubject }) {
  const [focusItem, setFocusItem] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What do you want to focus on?</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onSubmitEditing={({ nativeEvent: { text } }) => setFocusItem(text)}
        />
        <RoundedButton
          text="+"
          size={80}
          onPress={() => addFocusSubject(focusItem)}
        />
      </View>
    </View>
  );
}

export default Focus;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
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
