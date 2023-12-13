import { View, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import React from 'react';

import TextComponent from '../../../components/TextComponent';

interface Item {
  name: string;
  image: ImageSourcePropType;
}

export default function Item({ item }: { item: Item }) {
  return (
    <>
      <View key={item.name} style={styles.item}>
        <Image source={item.image} style={styles.image}></Image>
        <TextComponent style={styles.name}>{item.name}</TextComponent>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  image: {
    width: 46,
    height: 46,
  },
  name: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: '#464646',
  },
});
