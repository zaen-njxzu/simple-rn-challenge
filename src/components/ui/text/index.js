import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  txt: {
    color: "black",
    textAlign: "left",
    fontSize: 16
  },
  bold: {
    fontWeight: "700"
  },
  semibold: {
    fontWeight: "600"
  },
  light: {
    fontWeight: "200"
  },
  italic: {
    fontStyle: "italic"
  },
  center: {
    textAlign: "center"
  },
  h1: {
    fontSize: 48
  },
  h2: {
    fontSize: 32
  },
  h3: {
    fontSize: 20
  },
  h4: {
    fontSize: 18
  },
  h5: {
    fontSize: 16
  },
  h6: {
    fontSize: 14
  },
  p: {
    fontSize: 12
  },
  white: {
    color: "white"
  }
});

const TextCustom = ({
  children = "",
  style,
  h1 = false,
  h2 = false,
  h3 = false,
  h4 = false,
  h5 = false,
  h6 = false,
  p = false,
  bold = false,
  semibold = false,
  italic = false,
  light = false,
  center = false,
  white = false
}) => {
  const txtStyle = [styles.txt];

  if(h1) txtStyle.push(styles.h1);
  if(h2) txtStyle.push(styles.h2);
  if(h3) txtStyle.push(styles.h3);
  if(h4) txtStyle.push(styles.h4);
  if(h5) txtStyle.push(styles.h5);
  if(h6) txtStyle.push(styles.h6);
  if(p) txtStyle.push(styles.p);
  if(bold) txtStyle.push(styles.bold);
  if(semibold) txtStyle.push(styles.semibold);
  if(italic) txtStyle.push(styles.italic);
  if(light) txtStyle.push(styles.light);
  if(center) txtStyle.push(styles.center);
  if(white) txtStyle.push(styles.white);

  if(style) txtStyle.push(style);

  return (
    <Text allowFontScaling={false} style={txtStyle}>{children}</Text>
  );
};

export default TextCustom;