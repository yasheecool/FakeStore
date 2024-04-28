import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddNewToDoScreen from "./src/screens/AddNewToDoScreen";
import SplashScreen from "./src/screens/SplashScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Add New To-Do" component={AddNewToDoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
