import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import OrderType from "../components/OrderType";
import { useEffect } from "react";

export default Orders = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>My Orders</Text>
      </View>

      <OrderType></OrderType>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fa8ea2",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  titleContainer: {
    backgroundColor: "#7A8450",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    alignSelf: "stretch",
    marginHorizontal: 10,
    marginBottom: 25,
  },
  titleText: {
    fontFamily: "Helvetica",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 30,
    padding: 5,
    color: "black",
  },
});
