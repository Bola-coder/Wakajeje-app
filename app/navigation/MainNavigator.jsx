import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import Onboarding from "../screens/Onboarding";
import SignupWithPhone from "../screens/SignupWithPhone";

const Stack = createNativeStackNavigator();
const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnboardingScreen"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignupWithPhoneScreen"
        component={SignupWithPhone}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
