import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Alert,
} from "react-native";
import Button from "../components/Button";
import { loginDetails } from "../state/AuthSlice";
import { useSelector } from "react-redux";
import { logout } from "../state/AuthSlice";
import { useDispatch } from "react-redux";

export default UserProfile = ({ navigation }) => {
  const [editing, setEditing] = useState(false);
  const sessionDetails = useSelector(loginDetails);
  const TOKEN = sessionDetails.token;
  const { name, email } = sessionDetails.user;
  const [username, setName] = useState(name);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(sessionDetails);
  }, []);

  const updateDetails = async () => {
    console.log("Updated details are:", username, password);

    const response = await fetch("http://localhost:3000/users/update", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({ name: username, password: password }),
    });

    const res = await response.json();
    console.log(res);

    if (res.status === "OK") {
      Alert.alert(res.message);
      toggleEdit();
    } else {
      Alert.alert(res.message);
    }
  };

  const toggleEdit = () => {
    setEditing((prevVal) => !prevVal);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userProfile}>
        <Text style={styles.title}>User Profile</Text>
      </View>

      {!editing && (
        <View>
          <View style={styles.userDetails}>
            <View style={styles.inputEl}>
              <Text style={styles.label}>Name: </Text>
              <Text style={styles.input}>{name}</Text>
            </View>

            <View style={styles.inputEl}>
              <Text style={styles.label}>Email: </Text>
              <Text style={styles.input}>{email}</Text>
            </View>
          </View>

          <View style={styles.btnContainar}>
            <Button
              iconName={"refresh-sharp"}
              text={"Update"}
              style={styles.btn}
              onClickFn={() => toggleEdit()}
            ></Button>
            <Button
              iconName={"exit-outline"}
              text={"Sign Out"}
              style={styles.btn}
              onClickFn={() => {
                dispatch(logout());
                navigation.goBack();
              }}
            ></Button>
          </View>
        </View>
      )}

      {editing && (
        <View>
          <View style={styles.editModal}>
            <View style={styles.inputEl}>
              <Text style={styles.label}>New Name: </Text>
              <TextInput
                value={username}
                onChangeText={(val) => setName(val)}
                style={styles.inputEdit}
              ></TextInput>
            </View>

            <View style={styles.inputEl}>
              <Text style={styles.label}>Password: </Text>
              <TextInput
                value={password}
                secureTextEntry={true}
                onChangeText={(val) => setPassword(val)}
                style={styles.inputEdit}
              ></TextInput>
            </View>
          </View>

          <View style={styles.btnContainar}>
            <Button
              iconName={"checkmark"}
              text={"Confirm"}
              style={styles.btn}
              onClickFn={() => updateDetails()}
            ></Button>
            <Button
              iconName={"close"}
              text={"Cancel"}
              style={styles.btn}
              onClickFn={() => toggleEdit()}
            ></Button>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fa8ea2",
    // justifyContent: "center",
    // alignItems: "center",
  },
  userProfile: {
    marginHorizontal: 25,
    padding: 10,
    backgroundColor: "skyblue",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  title: {
    fontWeight: "500",
    fontSize: 25,
    textAlign: "center",
  },
  userDetails: {
    paddingVertical: 10,
    // backgroundColor: "skyblue",
    margin: 25,
    borderRadius: 5,
  },
  inputEl: {
    padding: 3,
    // backgroundColor: "grey",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  label: { fontWeight: "500" },
  input: {
    flex: 1,
    padding: 5,
    backgroundColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 5,
  },

  btnContainar: {
    marginHorizontal: 25,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    // backgroundColor: "yellow",
  },
  btn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue",
    padding: 10,
    margin: 20,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
  },

  editModal: {
    paddingVertical: 10,
    backgroundColor: "skyblue",
    margin: 25,
    borderRadius: 5,
  },
  inputEdit: {
    flex: 1,
    padding: 5,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
  },
});
