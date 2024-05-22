import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Categories from "./src/screens/Categories";
import ShoppingCart from "./src/screens/ShoppingCart";
import { Ionicons } from "@expo/vector-icons";
import SplashScreen from "./src/screens/SplashScreen";
import Products from "./src/screens/Products";
import Item from "./src/screens/Item";
import { Provider } from "react-redux";
import Store from "./src/state/Store";
import { useSelector } from "react-redux";
import { getCartSummary } from "./src/state/ShoppingCartSlice";

//Creating navigator objects
const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const ProductNavigation = () => {
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
    const icon = (name, color = "black", size = 22) => {
      return <Ionicons name={name} color={color} size={size} />;
    };
    return (
      <Tabs.Navigator initialRouteName="Product Categories">
        <Tabs.Screen
          name="Product Categories"
          component={ProductNavigation}
          options={{
            tabBarIcon: () => icon("storefront-sharp"),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="Shopping Cart"
          component={ShoppingCart}
          options={{
            tabBarIcon: () => icon("cart-sharp"),
            headerShown: false,
            tabBarBadge: totalQty,
            tabBarBadgeStyle: { color: "white" },
          }}
        />
      </Tabs.Navigator>
    );
  };

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={SplashScreen} />
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
