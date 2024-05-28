import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Button from "./Button";
import { addToCart, reduceQty } from "../state/ShoppingCartSlice";
import { useDispatch, useSelector } from "react-redux";

export default ItemCart = ({ imgSrc, name, price, quantity, id }) => {
  return (
    <View style={styles.item}>
      <Image source={{ uri: imgSrc }} style={styles.img} />

      <View style={styles.itemDetails}>
        <Text style={styles.itemTxt}>{name}</Text>
        <Text>PRICE: ${price}</Text>

        <View style={styles.qty}>
          <Text>Quantity: {quantity}</Text>
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
