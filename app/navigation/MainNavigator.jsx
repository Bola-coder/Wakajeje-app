import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import Onboarding from "../screens/Onboarding";
import SignupWithPhone from "../screens/SignupWithPhone";
import VerifyAccount from "../screens/VerifyAccount";
import SetupProfile from "../screens/SetupProfile";
import EmailEntry from "../screens/EmailEntry";
import NameEntry from "../screens/NameEntry";
import IDVerification from "../screens/IDVerification";
import NINVerification from "../screens/NINVerification";
import HomeScreen from "../screens/HomeScreen";
import BVNVerification from "../screens/BVNVerification";
import TabNavigation from "./TabNavigation";

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
      <Stack.Screen
        name="VerifyAccountWithOTPScreen"
        component={VerifyAccount}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SetupProfileScreen"
        component={SetupProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmailEntryScreen"
        component={EmailEntry}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NameEntryScreen"
        component={NameEntry}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="IDVerificationScreen"
        component={IDVerification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NINVerificationScreen"
        component={NINVerification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BVNVerificationScreen"
        component={BVNVerification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tab"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
