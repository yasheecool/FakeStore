import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Button from "./Button";
import { addToCart, reduceQty } from "../state/ShoppingCartSlice";
import { useDispatch, useSelector } from "react-redux";
import { loginDetails } from "../state/AuthSlice";
import { getCartItems } from "../state/ShoppingCartSlice";
import { updateCart } from "../../services/cartService";

export default Item = ({ imgSrc, name, price, quantity, id }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);
  const { token } = useSelector(loginDetails);

  useEffect(() => {
    updateCart(cartItems, token);
  }, [cartItems]);

  return (
    <View style={styles.item}>
      <Image source={{ uri: imgSrc }} style={styles.img} />

      <View style={styles.itemDetails}>
        <Text style={styles.itemTxt}>{name}</Text>
        <Text>PRICE: ${price}</Text>

        <View style={styles.qty}>
          <Button
            color="red"
            iconName={"remove-circle-sharp"}
            onClickFn={() => {
              dispatch(
                reduceQty({
                  id: id,
                })
              );
            }}
            style={styles.btn}
          />
          <Text>Quantity: {quantity}</Text>
          <Button
            color="green"
            iconName={"add-circle-sharp"}
            onClickFn={() => {
              dispatch(
                addToCart({
                  id: id,
                })
              );
            }}
            style={styles.btn}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "skyblue",
    marginHorizontal: 10,
    marginVertical: 7.5,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  itemDetails: {
    // backgroundColor: "yellow",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginLeft: 3,
    marginVertical: 3,
    width: "70.5%",
  },
  img: {
    height: 100,
    width: "27.5%",
    resizeMode: "contain",
    marginHorizontal: 3,
  },
  itemTxt: {
    fontWeight: "500",
  },
  qty: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
