import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("OnboardingScreen");
    }, 2000);
  }, []);

  return (
    <View className="bg-primary flex-1 p-3 justify-center items-center ">
      <Image source={require("./../../assets/images/logo.png")} alt="Logo" />
    </View>
  );
};

export default SplashScreen;
