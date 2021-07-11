import React,{useState} from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { TextInput } from 'react-native-paper';

function RoundedButton({style = {},
  textStyle = {},
  size = 125,
  text,
  ...props}) {
  return (
    
        <TouchableHighlight style={[styles(size).btn, style]} {...props}>
          <Text style={[styles(size).btnText, textStyle]}>{text}</Text>
        </TouchableHighlight>
    
  );
}

export default RoundedButton;

const styles = (size) => 
StyleSheet.create({
  btn: {
    backgroundColor: 'black',
    width: size,
    height: size,
    color: '#fff',
    borderRadius: size/2,
    border: '1px solid black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
  },
});
