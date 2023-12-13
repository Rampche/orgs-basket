import { StyleSheet, Text, TextStyle } from 'react-native';
import React, { ReactNode } from 'react';

interface TextComponentProps {
  children: ReactNode;
  style: TextStyle;
}

export default function TextComponent(props: TextComponentProps) {
  let { children, style } = props;

  let defaultStyle = styles.commonText;

  const combinedStyle =
    style && style.fontWeight === 'bold'
      ? [styles.boldText, style]
      : [styles.commonText, style];

  return <Text style={[defaultStyle, combinedStyle]}>{children}</Text>;
}

const styles = StyleSheet.create({
  commonText: {
    fontFamily: 'MontserratRegular',
    fontWeight: 'normal',
  },
  boldText: {
    fontFamily: 'MontserratBold',
    fontWeight: 'normal',
  },
});
