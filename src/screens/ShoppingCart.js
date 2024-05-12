import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";
import { getCartItems } from "../state/ShoppingCartSlice";
import Item from "../components/Item";

const ShoppingCart = ({ navigation }) => {
  const cartItems = useSelector(getCartItems);

  console.log("Shopping Cart Screen:", cartItems);

  const renderItem = ({ item }) => {
    return (
      <Item
        imgSrc={item.img}
        name={item.name}
        price={item.price}
        quantity={item.quantity}
        id={item.id}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Shopping Cart</Text>
      </View>
      {/* <Item imgSrc={item.image} name={item.title} price={item.price} /> */}
      <FlatList
        ListEmptyComponent={
          <Text style={styles.emptyText}>No Items in Cart !</Text>
        }
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
  summaryContainer: {
    backgroundColor: "#f5e0df",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    alignSelf: "stretch",
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  summaryText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  emptyText: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 100,
  },
});

export default ShoppingCart;
