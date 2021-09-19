import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Restaurants from "../screens/Restaurants";
import Account from "../screens/Account";
import TopRestaurants from "../screens/TopRestaurants";
import Favorites from "../screens/Favorites";
import Search from "../screens/Search";
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="restaurants" component={Restaurants} />
        <Tab.Screen name="account" component={Account} />
        <Tab.Screen name="favorites" component={Favorites} />
        <Tab.Screen name="search" component={Search} />
        <Tab.Screen name="top restaurant" component={TopRestaurants} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
