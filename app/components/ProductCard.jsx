import { View, Text, Image } from "react-native";
import React from "react";

const ProductCard = ({ text, image }) => {
  return (
    <View className="py-2 mr-4">
      <View
        className={
          "bg-gray-200 px-2 py-3 rounded-md w-[20vw] h-16 justify-center items-center"
        }
      >
        <Image source={image} />
      </View>
      <Text className="text-center text-xl font-medium">{text}</Text>
    </View>
  );
};

export default ProductCard;
