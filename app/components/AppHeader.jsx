import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const AppHeader = ({ title }) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View className={"flex-row p-3 items-center"}>
      <TouchableOpacity onPress={handleBackPress} className={"basis-1/3"}>
        <FontAwesome name="long-arrow-left" size={24} color="#141B34" />
      </TouchableOpacity>
      <Text className={"basis-2/3 font-semibold text-[20px]"}>{title}</Text>
    </View>
  );
};

export default AppHeader;
