import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Button = ({
  iconName,
  size = 22,
  color = "black",
  text,
  style,
  onClickFn,
}) => {
  return (
    <TouchableOpacity style={style} onPress={onClickFn}>
      <Ionicons name={iconName} size={size} color={color} />
      {text && <Text> {text} </Text>}
    </TouchableOpacity>
  );
};

export default Button;
