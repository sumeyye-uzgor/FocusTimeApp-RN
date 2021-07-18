import React, { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, FlatList } from "react-native";
import RoundedButton from "../../components/RoundedButton";
import Colors from "../../utils/Colors";
const HistoryItem = ({ item }) => {
  return <Text style={textStyles(item.isComplete).text}>{item.title}</Text>;
};
export default function FocusList({ focusHistory, onClear }) {
  return (
    <SafeAreaView style={styles.container}>
      {!!focusHistory.length && (
        <>
          <Text style={styles.text}>Things we've focused on</Text>
          <FlatList
            style={{ flex: 1 }}
            contentContainerStyle={{ alignItems: "center" }}
            data={focusHistory}
            renderItem={HistoryItem}
          />
          <RoundedButton text="Clear" onPress={onClear} />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 0.7,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    color: Colors.textColor,
  },
};

const textStyles = (isSuccess) => ({
  text: {
    fontSize: 30,
    color: isSuccess ? Colors.successColor : Colors.failColor,
  },
});
