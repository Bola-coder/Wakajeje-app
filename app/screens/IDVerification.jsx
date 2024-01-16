import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import AppHeader from "../components/AppHeader";
import { FontAwesome } from "@expo/vector-icons";

const IDVerification = ({ navigation }) => {
  const handleNINVerification = () => {
    navigation.navigate("NINVerificationScreen");
  };

  const handleBVNVerification = () => {
    navigation.navigate("BVNVerificationScreen");
  };
  return (
    <View className={" bg-white flex-1"}>
      <AppHeader title={"User ID Verification"} />
      <View className={"px-3"}>
        <Text className={"text-[20px] font-bold text-left mt-2"}>
          Let us verify if this is the real you{" "}
        </Text>
        <Text className={"text-[16px] font-normal text-left mt-2"}>
          Just a simple process that takes less than 2 minutes, We need to
          verify your identity.
        </Text>
        <View className={"mt-5"}>
          <Text className={"text-[16px] font-semibold text-left "}>
            Select ID type
          </Text>
          <View className={"mt-2"}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleNINVerification}
              className={
                "flex-row items-center mt-4 border-b-[1px] border-supporting pb-3"
              }
            >
              <Image
                source={require("./../../assets/images/ninIcon.png")}
                className={"mr-[9px]"}
              />
              <View>
                <Text className={"text-[16px] font-semibold text-left "}>
                  NIN
                </Text>
                <Text className={"text-[14px] font-normal text-left "}>
                  Verify your details using National Identification Number
                </Text>
              </View>
              <View className={"absolute left-[95%]"}>
                <FontAwesome name="angle-right" size={24} color="black" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleBVNVerification}
              className={
                "flex-row items-center mt-4 border-b-[1px] border-supporting pb-3"
              }
            >
              <Image
                source={require("./../../assets/images/bvnIcon.png")}
                className={"mr-[9px]"}
              />
              <View>
                <Text className={"text-[16px] font-semibold text-left "}>
                  BVN
                </Text>
                <Text className={"text-[14px] font-normal text-left "}>
                  Verify your details using Bank Verification Number{" "}
                </Text>
              </View>
              <View className={"absolute left-[95%]"}>
                <FontAwesome name="angle-right" size={24} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default IDVerification;
