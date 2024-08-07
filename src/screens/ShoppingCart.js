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
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getCartItems,
  getCartSummary,
  clearCart,
} from "../state/ShoppingCartSlice";
import Item from "../components/Item";
import Button from "../components/Button";
import { addToNewOrder } from "../state/OrderSlice";
import { updateCart } from "../../services/cartService";
import { loginDetails } from "../state/AuthSlice";

const ShoppingCart = ({ navigation }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);
  const { totalPrice, totalQty } = useSelector(getCartSummary);
  const { token } = useSelector(loginDetails);

  const handleCheckout = () => {
    const cart = cartItems;

    dispatch(addToNewOrder(cart));
    dispatch(clearCart());
    updateCart([], token);
  };

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
      <FlatList
        ListEmptyComponent={
          <Text style={styles.emptyText}>Your Cart is Empty</Text>
        }
        ListHeaderComponent={
          totalQty && (
            <View style={styles.summaryContainer}>
              <Text style={styles.summaryText}>Quantity:{totalQty} </Text>
              <Text style={styles.summaryText}>Price: ${totalPrice}</Text>
            </View>
          )
        }
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      {totalQty > 0 && (
        <Button
          text="CHECK OUT"
          style={styles.btn}
          iconName={"arrow-forward"}
          onClickFn={() => handleCheckout()}
        ></Button>
      )}
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
    alignSelf: "center",
  },
  btn: {
    backgroundColor: "#7A8450",
    padding: 10,
    flexDirection: "row",
    marginBottom: 10,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
  },
});

export default ShoppingCart;
