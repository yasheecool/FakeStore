import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import Button from "../components/Button";

const Categories = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  async function getData() {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data = await res.json();
    return data;
  }

  useEffect(() => {
    getData()
      .then((data) => {
        console.log("categories", categories);
        setLoading((loading) => !loading);
        setCategories((val) => [...data, ...val]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Choose Category</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={styles.categoryContainer}>
          <Button
            iconName="laptop-outline"
            text={categories[0]}
            size={24}
            color="black"
            style={styles.category}
            onClickFn={() => navigation.navigate("Products", categories[0])}
          />

          <Button
            iconName="diamond-outline"
            text={categories[1]}
            size={24}
            color="black"
            style={styles.category}
            onClickFn={() => navigation.navigate("Products", categories[1])}
          />

          <Button
            iconName="shirt-sharp"
            text={categories[2]}
            size={24}
            color="black"
            style={styles.category}
            onClickFn={() => navigation.navigate("Products", categories[2])}
          />

          <Button
            iconName="woman-sharp"
            text={categories[3]}
            size={24}
            color="black"
            style={styles.category}
            onClickFn={() => navigation.navigate("Products", categories[3])}
          />
        </View>
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
    marginTop: 50,
    marginBottom: 125,
    backgroundColor: "#7A8450",
    borderRadius: 10,
  },
  titleText: {
    fontFamily: "Helvetica",
    fontWeight: "500",
    fontSize: 30,
    padding: 5,
    color: "black",
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  category: {
    backgroundColor: "#f5e0df",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    width: 150,
    height: 150,
    borderColor: "black",
    borderWidth: 2,
  },
});

export default Categories;
