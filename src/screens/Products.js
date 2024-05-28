import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  Image,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import Button from "../components/Button";
import { saveData, loadData } from "../datamodel/storageFunctions";

const Products = ({ navigation, route }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const category = route.params;

  const fetchSaveSetProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    console.log(products);
    const filteredProducts = products.filter(
      (prod) => prod.category === category
    );
    saveData(category, filteredProducts);
    setProducts(filteredProducts);
    setLoading(false);
  };

  useEffect(() => {
    loadData(category).then((data) => {
      if (data) {
        setProducts(data);
        setLoading(false);
      } else {
        fetchSaveSetProducts();
      }
    });
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{category}</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={styles.productContainer}>
          <ScrollView>
            {products.map((prod, idx) => (
              <Pressable
                key={idx}
                onPress={() => navigation.navigate("Item", prod)}
              >
                <View style={styles.product}>
                  <Image source={{ uri: prod.image }} style={styles.img} />

                  <View style={styles.productDetails}>
                    <Text style={styles.prodText}>{prod.title}</Text>
                    <Text>PRICE: ${prod.price}</Text>
                  </View>
                </View>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      )}

      <View>
        <Button
          iconName={"arrow-back-sharp"}
          text={"BACK"}
          style={styles.btn}
          onClickFn={() => navigation.goBack()}
        ></Button>
      </View>
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
  },
  title: {
    fontFamily: "Helvetica",
    fontWeight: "500",
    fontSize: 30,
    padding: 5,
  },
  productContainer: {
    borderColor: "black",
    borderWidth: "2",
    margin: 5,
    borderRadius: 10,
    flex: 1,
  },
  product: {
    backgroundColor: "skyblue",
    marginHorizontal: 5,
    marginVertical: 7.5,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "flex-start",
    // width: "100%",
  },
  productDetails: {
    // backgroundColor: "yellow",
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: 3,
    marginVertical: 3,
    width: "70.5%",
    borderRadius: 20,
    // marginRight: 20,
  },
  img: {
    height: 100,
    // width: "100%",
    width: "27.5%",
    resizeMode: "contain",
    marginHorizontal: 3,
    // backgroundColor: "pink",
  },
  prodText: {
    fontWeight: "500",
  },
  btn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7A8450",
    padding: 10,
    margin: 20,
    borderRadius: 20,
  },
});

export default Products;
