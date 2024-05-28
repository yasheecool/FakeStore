import React, { useEffect } from "react";
import { Alert } from "react-native";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Screens
import Categories from "./src/screens/Categories";
import ShoppingCart from "./src/screens/ShoppingCart";
import SplashScreen from "./src/screens/SplashScreen";
import Products from "./src/screens/Products";
import Item from "./src/screens/Item";
import Orders from "./src/screens/Orders";
import UserNav from "./src/components/UserNav";

import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import Store from "./src/state/Store";
import { useSelector } from "react-redux";
import { getCartSummary } from "./src/state/ShoppingCartSlice";
import { loginDetails } from "./src/state/AuthSlice";
import AuthGuardButton from "./src/components/AuthGuardButton";

//Creating navigator objects
const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const ProductNavigation = ({ navigation }) => {
    return (
      <Stack.Navigator initialRouteName="ProdCategory">
        <Stack.Screen
          name="ProdCategory"
          component={Categories}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Item"
          component={Item}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };

  const BottomNavigator = () => {
    const { totalQty } = useSelector(getCartSummary);
    const { isLoggedIn } = useSelector(loginDetails);

    const icon = (name, color = "black", size = 22) => {
      return <Ionicons name={name} color={color} size={size} />;
    };

    return (
      <Tabs.Navigator initialRouteName="User Profile">
        <Tabs.Screen
          name="Product"
          component={ProductNavigation}
          options={{
            tabBarIcon: () => icon("storefront-sharp"),
            headerShown: false,
            tabBarButton: (props) => <AuthGuardButton {...props} />,
          }}
        />

        <Tabs.Screen
          name="Shopping Cart"
          component={ShoppingCart}
          options={{
            tabBarIcon: () => icon("cart-sharp"),
            tabBarButton: (props) => <AuthGuardButton {...props} />,
            headerShown: false,
            tabBarBadge: totalQty > 0 && isLoggedIn ? totalQty : null,
            tabBarBadgeStyle: { color: "white" },
          }}
        />
        <Tabs.Screen
          name="My Orders"
          component={Orders}
          options={{
            tabBarIcon: () => icon("basket"),
            tabBarButton: (props) => <AuthGuardButton {...props} />,
            headerShown: false,
            tabBarBadgeStyle: { color: "white" },
          }}
        />
        <Tabs.Screen
          name="User Profile"
          component={UserNav}
          options={{
            tabBarIcon: () => icon("person-circle-sharp"),
            headerShown: false,
          }}
        />
      </Tabs.Navigator>
    );
  };

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BottomNav"
            component={BottomNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
