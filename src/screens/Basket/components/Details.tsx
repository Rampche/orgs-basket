import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import React from 'react';
import TextComponent from '../../../components/TextComponent';
import basket from '../../../mocks/Basket';
import ButtonComponent from '../../../components/ButtonComponent';

let { name, farmLogo, farmName, description, price } = basket.details;

export default function Details({ ...basket }) {
  return (
    <>
      <TextComponent style={styles.basketName}>{name}</TextComponent>
      <View style={styles.farm}>
        <Image
          source={farmLogo as ImageSourcePropType}
          style={styles.farmLogo}
        ></Image>
        <TextComponent style={styles.farmName}>{farmName}</TextComponent>
      </View>
      <TextComponent style={styles.description}>{description}</TextComponent>
      <TextComponent style={styles.price}>{price}</TextComponent>
      <ButtonComponent />
    </>
  );
}

const styles = StyleSheet.create({
  basketName: {
    fontSize: 26,
    lineHeight: 42,
    color: '#464646',
    fontWeight: 'bold',
  },
  farm: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  farmName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  farmLogo: {
    width: 32,
    height: 32,
  },
  description: {
    color: '#a3a3a3',
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: '#2a9f85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
