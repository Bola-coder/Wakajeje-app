import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IonIcons from "@expo/vector-icons/Ionicons";
import HomeScreen from "./../screens/HomeScreen";
import homeTabIcon from "./../../assets/icons/homeTabIcon.png";
import productTabIcon from "./../../assets/icons/productTabIcon.png";
import tripTabIcon from "./../../assets/icons/tripTabIcon.png";
import profileTabIcon from "./../../assets/icons/profileTabIcon.png";
// import homeTabIconActive from "./../assets/icons/homeTabIconActive.png"


const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let routeName = route.name;
          color = focused ? "#00B5B5" : "#000";
          if (routeName == "Home") {
            iconName = focused ? homeTabIcon : homeTabIcon;
            size = focused ? 26 : 24;
          } else if (routeName === "Products") {
            iconName = focused ? productTabIcon : productTabIcon;
            size = focused ? 26 : 24;
          } else if (routeName === "Trips") {
            iconName = focused ? tripTabIcon : tripTabIcon;
            size = focused ? 26 : 24;
          } else if (routeName === "Profile") {
            iconName = focused ? profileTabIcon : profileTabIcon;
            size = focused ? 26 : 24;
          }
          return <Image source={iconName} color={color} />;
        },
        tabBarActiveTintColor: "#00B5B5",
        tabBarActiveBackgroundColor: "#FFF",
        tabBarInactiveBackgroundColor: "#FFF",
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 60,
          //   marginBottom: 5,
          //   marginHorizontal: 10,
          paddingBottom: 5,
          paddinngTop: 50,
          //   borderRadius: 12,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="Products"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Products",
        }}
      />
      <Tab.Screen
        name="Trips"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Trips",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
