import React from "react";

//Navigation
import { createStackNavigator } from "@react-navigation/stack";
import SignScreen from "../screens/SignScreen";
import UserProfile from "../screens/UserProfile";

const Stack = createStackNavigator();

export default UserNav = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Sign Screen">
      <Stack.Screen
        name="Sign Screen"
        component={SignScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="User Details"
        component={UserProfile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
