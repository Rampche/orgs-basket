import React from 'react';
import { ScrollView, StyleSheet, View, FlatList } from 'react-native';

import TopComponent from './components/TopComponent';
import Details from './components/Details';

import basket from '../../mocks/Basket';
import Item from './components/Item';
import TextComponent from '../../components/TextComponent';

const { top, details, items } = basket;

export default function Cesta({ ...basket }) {
  return (
    <>
      <FlatList
        data={items.list}
        renderItem={Item}
        keyExtractor={({ name }) => name}
        ListHeaderComponent={() => {
          return (
            <>
              <TopComponent title={top.title} />
              <View style={styles.basket}>
                <Details details={details} />
                <TextComponent style={styles.title}>
                  {items.itemTitle}
                </TextComponent>
              </View>
            </>
          );
        }}
      />
    </>
  );
}

//<Item {...items} />

const styles = StyleSheet.create({
  title: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
