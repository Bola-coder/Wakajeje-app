import { View, Text, Image } from "react-native";
import React from "react";
import AppButton from "../components/AppButton";

const SetupProfile = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate("EmailEntryScreen");
  };
  return (
    <View className={" bg-white flex-1 pt-[15%]"}>
      <View className={"items-center mt-[20%]"}>
        <Image
          source={require("./../../assets/images/setupProfileImage.png")}
          alt="Image"
        />
      </View>
      <Text className={"text-[36px] font-bold text-center mt-5"}>
        Set up your profile
      </Text>
      <Text
        className={"text-[16px] font-normal text-center w-[80%] mx-auto  mt-5"}
      >
        Profile set up will let us know more about you and how we can provide
        better service for you
      </Text>
      <View className={"mt-[10%]"}>
        <AppButton
          text={"Continue with email"}
          bg={"primary"}
          textColor={"white"}
          handlePress={handleNext}
        />
      </View>
    </View>
  );
};

export default SetupProfile;
