import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Button from "../components/Button";

const ShoppingCart = ({ navigation }) => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fa8ea2",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default ShoppingCart;
