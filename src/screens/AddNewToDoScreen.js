import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Button from "../components/Button";
import { Ionicons } from "@expo/vector-icons";

const AddNewToDoScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Choose Category</Text>
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity style={styles.category}>
          <Ionicons name={"laptop-outline"} size={24} color={"black"} />
          <Text>Electronics</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.category}>
          <Ionicons name={"diamond-outline"} size={24} color={"black"} />
          <Text>Jewelry</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.category}>
          <Ionicons name={"shirt-sharp"} size={24} color={"black"} />
          <Text>Men's Clothing</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.category}>
          <Ionicons name={"woman-sharp"} size={24} color={"black"} />
          <Text>Women's Clothing</Text>
        </TouchableOpacity>
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
  },
  titleText: {
    fontFamily: "Helvetica",
    fontWeight: "500",
    fontSize: 30,
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

export default AddNewToDoScreen;
