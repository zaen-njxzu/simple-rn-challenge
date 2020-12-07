import React from 'react';
import { View, StyleSheet, TouchableNativeFeedback, TouchableWithoutFeedback, Platform, TouchableOpacity } from 'react-native';

const isUseNativeFeedback = Platform.OS === 'android' && Platform.Version >= 21;

const CardView = props => {

  let TouchableCmp = TouchableWithoutFeedback;
  let styleTouchable = [];

  if(isUseNativeFeedback) {
    TouchableCmp = TouchableNativeFeedback;
    styleTouchable = [styles.touchable];
  }

  return (
    <View style={styleTouchable}>
      <TouchableCmp onPress={props.onPress}>
        <View style={{...styles.card, ...styles.leftRadius, ...styles.rightRadius, ...props.style}}>
          {props.children}
        </View>
      </TouchableCmp>
    </View>

  );
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
  },
  touchable: {
    borderRadius: 10, 
    overflow: "hidden"
  }
});

export default CardView;
