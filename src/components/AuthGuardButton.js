import React from "react";
import { TouchableOpacity, Alert } from "react-native";
import { useSelector } from "react-redux";

export default function AuthGuardButton({ navigation }) {
  const token = useSelector((state) => state.auth.token);

  const handlePress = () => {
    if (!token) {
      Alert.alert(
        "Unauthorized",
        "You need to be logged in to access this page.",
        [{ text: "OK" }]
      );
    } else {
      navigation.navigate("ProductNavigation");
    }
  };
  return <TouchableOpacity onPress={handlePress} />;
}
