import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import Button from "../components/Button";
import { useEffect } from "react";

export default UserProfile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.signUpForm}>
        <Text style={styles.headingText}>Sign in with email and password</Text>

        <View style={styles.inputContainer}>
          <View style={styles.inputEl}>
            <Text>Email</Text>
            <TextInput style={styles.inputfield}></TextInput>
          </View>

          <View style={styles.inputEL}>
            <Text>Password</Text>
            <TextInput
              style={styles.inputfield}
              secureTextEntry={true}
            ></TextInput>
          </View>
        </View>

        <View style={styles.btnContainar}>
          <Button
            iconName={"remove-circle-sharp"}
            text={"Clear"}
            style={styles.btn}
            onClickFn={() => console.log("clicked")}
          ></Button>
          <Button
            iconName={"arrow-forward-sharp"}
            text={"Sign In"}
            style={styles.btn}
            onClickFn={() => console.log("clicked")}
          ></Button>
        </View>

        <Text style={styles.signUp}>Switch to: sign up as a new user</Text>
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
  headingText: {
    fontWeight: "600",
    fontSize: 18,
  },
  signUpForm: {
    backgroundColor: "skyblue",
    padding: 15,
    borderRadius: 5,
  },
  inputContainer: {
    marginTop: 20,
  },
  inputfield: {
    backgroundColor: "white",
    padding: 7,
    marginVertical: 5,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
  },
  btnContainar: {
    display: "flex",
    flexDirection: "row",
  },

  btn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7A8450",
    padding: 10,
    margin: 20,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
  },
  signUp: {
    alignSelf: "center",
    fontSize: 12,
    color: "dimgrey",
  },
});
