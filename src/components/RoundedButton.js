import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { TextInput } from "react-native-paper";
import Colors from "../utils/Colors";
function RoundedButton({
  style = {},
  textStyle = {},
  size = 125,
  text,
  onPress,
  ...props
}) {
  return (
    <TouchableHighlight
      style={[styles(size).btn, style]}
      onPress={onPress}
      {...props}
    >
      <Text style={[styles(size).btnText, textStyle]}>{text}</Text>
    </TouchableHighlight>
  );
}

export default RoundedButton;

const styles = (size) =>
  StyleSheet.create({
    btn: {
      backgroundColor: Colors.bgColor,
      width: size,
      height: size,
      color: Colors.textColor,
      borderRadius: size / 2,
      borderColor: Colors.textColor,
      borderWidth: 2,
      justifyContent: "center",
      alignItems: "center",
    },
    btnText: {
      color: Colors.textColor,
      fontSize: size / 4,
    },
  });
