import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import IonIcons from "@expo/vector-icons/Ionicons";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";
import SectionTitle from "../components/SectionTitle";
import TripCard from "../components/TripCard";
import ProductCard from "../components/ProductCard";
import smallCarImage from "./../../assets/images/smallCarImage.png";
import packageImage from "./../../assets/images/packageImage.png";
import resturantImage from "./../../assets/images/resturantImage.png";
import errandImage from "./../../assets/images/errandImage.png";

const HomeScreen = ({navigation}) => {
  const {location, locationError, getLocation} = useAppContext()

  useEffect(() => {
    getLocation();
  }, []);
  
  console.log(location);
  console.log(locationError);

  const handleBookRideClick = () => {
    navigation.navigate("BookRide");
  }

  return (
    <ScrollView
      vertical
      showsVerticalScrollIndicator
      className={"p-4 pb-7 flex-1 bg-white"}
    >
      {/* Home Header */}
      <View className={"flex-row justify-between items-center"}>
        <View className={"flex-row items-center"}>
          <View className={"w-[56px] h-[56px]  mr-3"}>
            <Image
              source={require("./../../assets/images/profileImage.png")}
              className={"w-[100%] h-[100%] rounded-full"}
            />
          </View>
          <View>
            <Text className={"text-2xl font-bold"}>Hello Gbolahan</Text>
            <View className={"flex-row items-center"}>
              <IonIcons name="location-outline" size={20} color={"#00B5B5"} />
              <Text className={"text-xl font-normal"}>Abeokuta, Nigeria</Text>
            </View>
          </View>
        </View>
        <View>
          <IonIcons name="menu-outline" size={30} />
        </View>
      </View>

      {/* Search Input */}
      <View className={"mt-5"}>
        <View className={"absolute left-[2%] top-[25%] z-10 self-center"}>
          <IonIcons name="search" size={24} color="#4F4F4F" />
        </View>
        <TextInput
          placeholder="Where are you heading to"
          className={"p-3 bg-gray-200 rounded-md pl-9 text-xl"}
        />
      </View>

      {/* Places Around me */}
      <View>
        <SectionTitle name={"Restaurants Around Me "} />
        <View>
          <TripCard useIcon={true} Icon={<FontAwesomeIcon name='cutlery' size={24}/>}/>
          {/* <TripCard /> */}
        </View>
      </View>

      {/* Banner */}
      <View
        className={
          "mt-5 flex-row justify-between items-center bg-primary px-4 py-6 rounded-lg"
        }
      >
        <View>
          <Text className={"text-3xl font-bold text-white"}>Ride Smart</Text>
          <Text className={"text-3xl font-bold text-white"}>Earn Big</Text>
          <TouchableOpacity onPress={handleBookRideClick} className={"flex-row justify-between items-center mt-2"}>
            <Text className={"text-md font-medium text-white"}>
              Ride with Wakajeje{" "}
            </Text>
            <View className={"self-center"}>
              <IonIcons name="arrow-forward" size={18} color="#FFF" />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={require("./../../assets/images/carImage.png")}
            className={"width-[100%] rounded-md"}
          />
        </View>
      </View>

      {/* Products */}
      <View>
        <SectionTitle name={"Our Products"} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ProductCard image={smallCarImage} text={"Ride"} />
          <ProductCard image={packageImage} text={"Package"} />
          <ProductCard image={resturantImage} text={"Resturant"} />
          <ProductCard image={errandImage} text={"Errands"} />
          <ProductCard image={smallCarImage} text={"Ride"} />
          <ProductCard image={packageImage} text={"Package"} />
          <ProductCard image={resturantImage} text={"Resturant"} />
          <ProductCard image={errandImage} text={"Errands"} />
        </ScrollView>
      </View>

      {/* Trips */}
      <View>
        <SectionTitle name={"My Trips"} />
        <View>
        <TripCard useIcon={true} Icon={<FontAwesomeIcon name='cutlery' size={24}/>}/>
        <TripCard useIcon={true} Icon={<FontAwesomeIcon name='cutlery' size={24}/>}/>
        <TripCard useIcon={true} Icon={<FontAwesomeIcon name='cutlery' size={24}/>}/>
        <TripCard useIcon={true} Icon={<FontAwesomeIcon name='cutlery' size={24}/>}/>
        <TripCard useIcon={true} Icon={<FontAwesomeIcon name='cutlery' size={24}/>}/>
        <TripCard useIcon={true} Icon={<FontAwesomeIcon name='cutlery' size={24}/>}/>
        <TripCard useIcon={true} Icon={<FontAwesomeIcon name='cutlery' size={24}/>}/>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
