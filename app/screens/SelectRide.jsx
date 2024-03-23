import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, {useState} from "react";
import MapView from "react-native-maps";
import FontAwesome from '@expo/vector-icons/FontAwesome'
import RideCard from '../components/RideCard';
import cashIcon from "./../../assets/icons/cashIcon.png"

const SelectRide = () => {
    const [selected, setSelected] = useState(0);

    const handleSelect = (index) => {
        setSelected(index)
    }
  return (
    <View className={"pb-7 flex-1 bg-white"}>
      {/* Map View */}
      <MapView className="w-full min-h-[55%]" />
      {/* The View beneath the map */}
      <View className="p-3 h-[45%] min-h-[40%] bg-gray-50 border-l-1 rounded-l-3xl border-gray--100">
        {/* RideCards */}
        <View>
        <RideCard selected={selected === 0} name={"Wakajeje Economy"} price={"1, 500"} oldPrice={"2, 500"} recommended={true} handlePress={() => setSelected(0)}/>
        <RideCard selected={selected === 1} name={"Wakajeje Premium"} price={"4, 500"} oldPrice={"6, 500"} handlePress={() => setSelected(1)}/>
        <RideCard selected={selected === 2} name={"Wakajeje General"} price={"600"} oldPrice={"900"} handlePress={() => setSelected(2)}/>
        </View>
        {/* Select Payment Method */}
        <TouchableOpacity activeOpacity={0.7} className="flex-row items-start mt-2">
            <View className="mr-2">
                <Image source={cashIcon} width={30} height={30}/>
            </View>
            <View>
                <View className="flex-row items-center ">
                    <Text className=" text-md font-bold mr-2">Cash</Text>
                    <FontAwesome name='angle-down' className="font-bold"/>
                </View>
                <Text className="text-md">Personal Ride</Text>
            </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SelectRide