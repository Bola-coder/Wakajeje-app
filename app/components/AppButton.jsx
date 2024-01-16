import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const AppButton = ({ text, bg, textColor, handlePress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`p-5 bg-${bg} w-[90%] mx-auto rounded-full`}
      onPress={handlePress}
    >
      <Text className={`text-center text-${textColor} text-[20px] font-bold`}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;
