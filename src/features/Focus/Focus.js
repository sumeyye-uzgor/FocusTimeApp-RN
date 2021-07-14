import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import RoundedButton from "../../components/RoundedButton";
import Colors from "../../utils/Colors";

function Focus({ addFocusSubject }) {
  const [focusItem, setFocusItem] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What do you want to focus on?</Text>
      <View style={styles.inputContainer}>
        <TextInput
          selectionColor={Colors.textColor}
          selectionColorAndroid={Colors.textColor}
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
    color: Colors.textColor,
    width: 100,
    height: 70,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.textColor,
    backgroundColor: Colors.bgColor,
    paddingLeft: 20,
    fontSize: 20,
  },
});
