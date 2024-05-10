import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import Button from "../components/Button";

export default SplashScreen = ({ navigation }) => {
  const navToNewToDo = () => navigation.navigate("BottomNav");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Text style={styles.title}>FAKE STORE</Text>
        <Image source={require("../../splashImage.png")} style={styles.image} />

        <Button
          iconName={"arrow-forward-sharp"}
          text={"PROCEED"}
          style={styles.btn}
          onClickFn={navToNewToDo}
        ></Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fa8ea2",
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    display: "flex",
    alignItems: "center",
    fontSize: 30,
  },
  title: {
    fontSize: 30,
    fontFamily: "Helvetica",
    fontWeight: "700",
    color: "#7A8450",
    textShadowColor: "#000000",
    textShadowOffset: { height: 1, width: -1 },
    textShadowRadius: 3,
  },
  image: {
    width: 300,
    height: 450,
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
