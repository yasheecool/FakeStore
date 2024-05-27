import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import Button from "../components/Button";
import { loginDetails } from "../state/AuthSlice";
import { useSelector } from "react-redux";
import { saveData } from "../datamodel/storageFunctions";
import { loadData } from "../datamodel/storageFunctions";

const Categories = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const sessionDetails = useSelector(loginDetails);
  const { name } = sessionDetails.user;
  const key = "categories";

  async function fetchSetCategories() {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data = await res.json();
    setCategories((val) => [...val, ...data]);
    setLoading(false);
    saveData(key, data);
  }

  useEffect(() => {
    loadData(key).then((data) => {
      if (!data) {
        fetchSetCategories();
      } else {
        setCategories((val) => [...val, ...data]);
        setLoading(false);
      }
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Product Categories</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={styles.categoryContainer}>
          <Button
            iconName="laptop-outline"
            text={categories[0][0].toUpperCase() + categories[0].slice(1)}
            size={24}
            color="black"
            style={styles.category}
            onClickFn={() => navigation.navigate("Products", categories[0])}
          />

          <Button
            iconName="diamond-outline"
            text={categories[1][0].toUpperCase() + categories[1].slice(1)}
            size={24}
            color="black"
            style={styles.category}
            onClickFn={() => navigation.navigate("Products", categories[1])}
          />

          <Button
            iconName="shirt-sharp"
            text={categories[2][0].toUpperCase() + categories[2].slice(1)}
            size={24}
            color="black"
            style={styles.category}
            onClickFn={() => navigation.navigate("Products", categories[2])}
          />

          <Button
            iconName="woman-sharp"
            text={categories[3][0].toUpperCase() + categories[3].slice(1)}
            size={24}
            color="black"
            style={styles.category}
            onClickFn={() => navigation.navigate("Products", categories[3])}
          />
        </View>
      )}
      <View style={styles.name}>
        <Text>Developed By: {name}</Text>
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
  name: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});

export default Categories;
