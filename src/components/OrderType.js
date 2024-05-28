import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
  RootTagContext,
} from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { getNewOrderSummary } from "../state/OrderSlice";
import { useSelector } from "react-redux";
import ItemCart from "./ItemCart";

export default OrderType = () => {
  const [expanded, setExpanded] = useState(false);
  const { orders, totalPrice, totalQty } = useSelector(getNewOrderSummary);

  const toggleExpanded = () => {
    setExpanded((prevVal) => !prevVal);
    console.log("logged", orders, totalPrice, totalQty);
  };

  const renderItem = ({ item }) => {
    return (
      <ItemCart
        imgSrc={item.img}
        name={item.name}
        price={item.price}
        quantity={item.quantity}
        id={item.id}
      />
    );
  };

  return (
    <View style={styles.orderContainer}>
      <View style={styles.iconText}>
        <Text style={styles.orderCategoryTxt}>New Order</Text>
        <AntDesign
          style={styles.icon}
          name={expanded ? "caretup" : "caretdown"}
          size={22}
          color="black"
          onPress={toggleExpanded}
        />
      </View>

      <FlatList
        ListHeaderComponent={
          <View style={styles.summaryContainer}>
            <Text style={styles.summaryText}>Quantity:{totalQty} </Text>
            <Text style={styles.summaryText}>Price: ${totalPrice}</Text>
          </View>
        }
        data={orders[0]}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  orderContainer: {
    backgroundColor: "skyblue",
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 2,
    alignSelf: "stretch",
    marginHorizontal: 10,
    marginBottom: 25,
    padding: 10,
  },
  iconText: {
    flexDirection: "row",
  },
  orderCategoryTxt: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 20,
    color: "black",
    marginLeft: 125,
  },
  icon: {
    marginLeft: "auto",
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
