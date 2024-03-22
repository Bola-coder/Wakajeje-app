import { View, TextInput, ScrollView } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import IonIcons from "@expo/vector-icons/Ionicons";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome5";
import TripCard from "../components/TripCard";

const BookRide = () => {
  return (
    <View className={"pb-7 flex-1 bg-white"}>
      <MapView className="w-full min-h-[60%]" />
      {/* The View beneath the map */}
      <View className="h-[40%] min-h-[40%] bg-gray-50 border-l-1 rounded-l-3xl border-gray--100">
        {/* Search Input */}
        <View className={"mt-5 px-4"}>
          <View className={"absolute left-[6%] top-[25%] z-10 self-center"}>
            <IonIcons name="search" size={24} color="#4F4F4F" />
          </View>
          <TextInput
            placeholder="Where are you heading to"
            className={"p-3 bg-gray-200 rounded-md pl-9 text-lg"}
          />
        </View>
        {/* Trip Cards */}
        <ScrollView className="p-4" showsVerticalScrollIndicator={false}>
          <TripCard
            hideRightSideContent={true}
            Icon={<IonIcons name="location-sharp" size={24} />}
          />
          <TripCard
            hideRightSideContent={true}
            Icon={<IonIcons name="location-sharp" size={24} />}
          />
          <TripCard
            hideRightSideContent={true}
            Icon={<IonIcons name="location-sharp" size={24} />}
          />
          <TripCard
            hideRightSideContent={true}
            Icon={<IonIcons name="location-sharp" size={24} />}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default BookRide;
