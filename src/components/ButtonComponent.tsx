import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import TextComponent from './TextComponent';
import basket from '../mocks/Basket';

let { buttonName } = basket.details;

export default function ButtonComponent({ ...basket }) {
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <TextComponent style={styles.buttonText}>{buttonName}</TextComponent>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
    backgroundColor: '#2a9f85',
    paddingVertical: 16,
    borderRadius: 6,
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
  },
});
