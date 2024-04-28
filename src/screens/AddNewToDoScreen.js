import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import Button from "../components/Button";

const AddNewToDoScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Add New To-do Item</Text>
      </View>

      <View></View>

      <View style={styles.btnContainer}>
        <Button
          style={styles.button}
          onClickFn={navigation.goBack}
          iconName={"arrow-back"}
          text={"BACK"}
        />

        <Button
          style={styles.button}
          onClickFn={console.log("save btn clicked")}
          iconName={"save-sharp"}
          text={"SAVE"}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headingContainer: {
    alignItems: "center",
    backgroundColor: "#20A9FE",
    justifyContent: "center",
  },
  heading: {
    padding: 10,
    fontSize: 20,
    fontWeight: "700",
    color: "#FAFAFA",
    fontFamily: "Helvetica",
  },

  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#20A9FE",
    padding: 10,
    margin: 20,
    borderRadius: 20,
  },
});

export default AddNewToDoScreen;
