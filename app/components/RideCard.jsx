import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import carImage from "./../../assets/images/carImage.png";
import IonIcons from "@expo/vector-icons/Ionicons";
import AppButton from "./AppButton";
const RideCard = ({selected, handlePress, name, price, oldPrice, recommended}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handlePress} className={`flex-row items-center justify-between p-3 ${!selected && "border-b-2 "} mb-2 border-gray-300`} style={selected && {backgroundColor: "#E6FFFF", borderWidth: 2, borderColor: "#00B5B5", borderRadius: 6}}>
      <View>
        <Image source={carImage} />
      </View>
      <View>
        <Text className="text-md font-bold py-1">{name}</Text>
        <View className={"flex-row items-center justify-between"}>
          <View className={"flex-row items-center"}>
            <IonIcons name={"time"} size={16} />
            <Text className={"text-md font-medium ml-1"}>5 mins</Text>
          </View>
          <View className={"flex-row items-center"}> 
            <IonIcons name="person" size={16}/>
            <Text className={"text-md font-medium ml-1"}>3</Text>
          </View>
        </View>
       {recommended && ( <View className="p-2 bg-primary rounded-full mt-3 w-full">
            <Text className="text-white">Recommended</Text>
        </View>)}
      </View>
      <View>
        <Text className={"text-lg font-bold"}>&#8358; {price}</Text>
        <Text className={"text-md line-through"}>&#8358; {oldPrice}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RideCard;
