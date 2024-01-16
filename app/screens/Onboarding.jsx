import { View, Text, Image } from "react-native";
import React from "react";
import AppButton from "../components/AppButton";

const Onboarding = ({ navigation }) => {
  const handleButtonPress = () => {
    navigation.navigate("SignupWithPhoneScreen");
  };
  return (
    <View>
      <View className="mt-[30%]">
        <Text className={" text-center text-[36px] font-bold"}>Wakajeje</Text>
      </View>
      <View className={"items-center mt-3"}>
        <Image source={require("./../../assets/images/onboardingImage.png")} />
      </View>
      <View className={"mt-[10%]"}>
        <Text className={"text-center text-[36px] font-semibold"}>
          Start Wakajeje
        </Text>
        <Text
          className={
            "text-center text-[20px] font-medium mt-4 w-[90%] r mx-auto"
          }
        >
          your ticket to effortless travels! Ready to set out on stress-free
          journeys?{" "}
        </Text>
      </View>
      <View className={"mt-[20%]"}>
        <AppButton
          text={"Get Started"}
          bg={"primary"}
          textColor={"white"}
          handlePress={handleButtonPress}
        />
      </View>
    </View>
  );
};

export default Onboarding;
