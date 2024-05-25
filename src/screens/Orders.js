import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { useEffect } from "react";

export default Orders = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text> Hello World!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fa8ea2",
    justifyContent: "center",
    alignItems: "center",
  },
});
