import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import TextComponent from '../../../components/TextComponent';
const topImage = require('../../../../assets/topo.png');
const width = Dimensions.get('screen').width;

const TopComponent: React.FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <Image source={topImage} style={styles.topImage} />
      <TextComponent style={styles.title}>{title}</TextComponent>
    </>
  );
};

const styles = StyleSheet.create({
  topImage: {
    width: '100%',
    height: (578 / 768) * width,
  },
  title: {
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 16,
    lineHeight: 26,
    padding: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default TopComponent;
