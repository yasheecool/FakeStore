import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import Button from "../components/Button";
import { Ionicons } from "@expo/vector-icons";

export default Item = ({ navigation, route }) => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  //   const fetchData = async () => {};

  useEffect(() => {
    setItem(route.par);
  }, []);

  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fa8ea2",
    justifyContent: "flex-start",

    alignItems: "center",
  },
});
