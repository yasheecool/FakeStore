import React from "react";
import { TouchableOpacity, Alert } from "react-native";
import { useSelector } from "react-redux";
import { loginDetails } from "../state/AuthSlice";

export default function AuthGuardButton({ onPress, ...props }) {
  const { isLoggedIn } = useSelector(loginDetails);
  const handlePress = () => {
    if (!isLoggedIn) {
      Alert.alert(
        "Login Required",
        "You need to be logged in to access this page.",
        [{ text: "OK" }]
      );
    } else {
      onPress();
    }
  };
  return <TouchableOpacity {...props} onPress={handlePress} />;
}
