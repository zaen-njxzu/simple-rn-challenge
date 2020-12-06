import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { PRIMARY_COLOR, SUCCESS_COLOR } from '../../../constants/colors';
import CardView from '../card-view';

const SideLineCardView = ({
  children = null,
  style,
  sideType = "PENDING",
  onPress = () => {}
}) => {
  let sideStyle = [styles.side, styles.leftRadius];

  switch (sideType) {
    case "SUCCESS":
      sideStyle.push(styles.success);
      break;
    default:
      break;
  }

  return (
    <CardView style={style} onPress={onPress}>
      <View style={sideStyle} />
      {children}
    </CardView>
  );
};

export const styles = StyleSheet.create({
  side: {
    backgroundColor: PRIMARY_COLOR,
    height: "100%",
    width: 5,
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0
  },
  success: {
    backgroundColor: SUCCESS_COLOR
  },
  none: {
    backgroundColor: null
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


export default SideLineCardView;
