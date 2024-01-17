import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import IonIcons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const TripCard = ({ useIcon }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      className={"flex-row justify-between items-center mb-3 mt-2"}
    >
      <View className={"flex-row justify-between items-center"}>
        <View className={"p-4 bg-gray-200 rounded-full mr-3"}>
          <Image source={require("./../../assets/images/foodIcon.png")} />
        </View>
        <View>
          <View className={"pb-1"}>
            <Text className={"text-xl font-bold"}>Yakoyo Resturant</Text>
          </View>
          <View className={"flex-row justify-between items-center"}>
            <View className={"flex-row items-center"}>
              <IonIcons name={"time"} size={16} />
              <Text className={"text-md font-medium ml-1"}>5 mins drive</Text>
            </View>
            <View className={"flex-row items-center"}>
              <IonIcons name={"star"} size={16} color={"#F27C28"} />
              <Text className={"text-md font-medium ml-1"}>4.3</Text>
            </View>
          </View>
        </View>
      </View>

      <View className={"mr-2"}>
        {useIcon ? (
          <FontAwesome name="angle-right" size={30} />
        ) : (
          <Text className={"text-xl font-bold"}>6,500</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default TripCard;
