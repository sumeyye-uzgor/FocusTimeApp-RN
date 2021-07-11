import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import Focus from './src/features/Focus';

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  function addFocusSubject(focusItem) {
    setFocusSubject(focusSubject ? [...focusSubject, focusItem] : [focusItem]);
  }
  return (
    <View style={styles.container}>
    <View><Focus addFocusSubject={addFocusSubject} /></View>
      {focusSubject ? (
        <View>
          {focusSubject.map((sub) => (
            <Text key={sub}>{sub}</Text>
          ))}
        </View>
      ) : (
        <Text>Nothing to show here</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: Constants.statusBarHeight + 80,
    backgroundColor: '#ecf0f1',
  },
});
