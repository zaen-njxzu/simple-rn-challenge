import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardView = props => {
  return <View style={{...styles.card, ...styles.leftRadius, ...styles.rightRadius, ...props.style}}>{props.children}</View>;
};

export const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: 'white'
  },
  leftRadius: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  rightRadius: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  }
});

export default CardView;
