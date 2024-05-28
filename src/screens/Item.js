import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import { addToCart, getCartItems } from "../state/ShoppingCartSlice";
import { updateCart } from "../../services/cartService";
import { loginDetails } from "../state/AuthSlice";

export default Item = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const cartItems = useSelector(getCartItems);
  const { token } = useSelector(loginDetails);

  useEffect(() => {
    setItem({ ...route.params });
    // console.log({ ...route.params });
    setLoading(false);
  }, []);

  useEffect(() => {
    if (token) {
      console.log("cart updated");
      updateCart(cartItems, token);
    }
  }, [cartItems]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Product Details</Text>
      </View>

      <View style={styles.itemDetailContainer}>
        <Image source={{ uri: item.image }} style={styles.img}></Image>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <View style={styles.itemInfo}>
          <Text style={styles.itemInfoText}>Rating: {item.rating?.rate}</Text>
          <Text style={styles.itemInfoText}>Sold: {item.rating?.count}</Text>
          <Text style={styles.itemInfoText}>Price: ${item.price}</Text>
        </View>

        <View style={styles.btnContainer}>
          <Button
            iconName={"arrow-back-sharp"}
            text={"BACK"}
            style={styles.btn}
            onClickFn={() => navigation.goBack()}
          ></Button>
          <Button
            iconName={"cart"}
            text={"ADD TO CART"}
            style={styles.btn}
            onClickFn={() => {
              dispatch(
                addToCart({
                  img: item.image,
                  name: item.title,
                  price: item.price,
                  id: item.id,
                })
              );
            }}
          ></Button>
        </View>

        <Text style={styles.descTitle}>Description: </Text>
        <View style={styles.description}>
          <ScrollView>
            <Text style={styles.descText}>{item.description}</Text>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const { height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fa8ea2",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  titleContainer: {
    marginTop: 5,
    backgroundColor: "#7A8450",
    borderRadius: 10,
  },
  title: {
    fontFamily: "Helvetica",
    fontWeight: "500",
    fontSize: 27,
    padding: 5,
  },
  itemDetailContainer: {
    alignItems: "center",
  },
  img: {
    height: 300,
    width: 350,
    resizeMode: "contain",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    marginVertical: 5,
  },
  itemTitle: {
    fontFamily: "Helvetica",
    fontWeight: "500",
    fontSize: 23,
    textDecorationLine: "underline",
  },
  itemInfo: {
    marginVertical: 7.5,
    paddingVertical: 7,
    paddingHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "#7DBBC3",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemInfoText: {
    fontSize: 15,
    fontWeight: "500",
    marginHorizontal: 18,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  btn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7A8450",
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  descTitle: {
    fontFamily: "Helvetica",
    fontWeight: "500",
    fontSize: 27,
    padding: 5,
    alignSelf: "stretch",
    marginHorizontal: 10,
  },
  description: {
    maxHeight: screenHeight * 0.15,
    backgroundColor: "grey",
    borderRadius: 2,
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    marginHorizontal: 10,
  },
  descText: {
    margin: 10,
  },
});
