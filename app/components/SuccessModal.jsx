import React from "react";
import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import IonIcons from "@expo/vector-icons/Ionicons";
import AppButton from "./AppButton";
const SuccessModal = ({
  isVisible,
  onClose,
  title,
  message,
  buttonText,
  onButtonPress,
}) => {
  return (
    <Modal
      visible={isVisible}
      animationType={"slide"}
      transparent={true}
      onRequestClose={onClose}
    >
      <View className=" flex-1 p-2 bg-white mt-[40vh] mb-[3vh] mx-2 rounded-lg shadow-black drop-shadow-lg">
        <View className={""}>
          <TouchableOpacity
            activeOpacity={0.7}
            className={"absolute top-0 right-0 bg-gray-300 rounded-full p-1"}
            onPress={onClose}
          >
            <IonIcons name="close" size={30} color="#141B34" />
          </TouchableOpacity>
          <Image
            source={require("./../../assets/images/successImage.png")}
            className={"self-center m-5"}
          />
          <Text className={"text-center text-[20px] font-bold"}>{title}</Text>
          <Text className={"text-center text-[16px] font-normal m-3 mb-7"}>
            {message}
          </Text>
          <AppButton
            text={buttonText}
            bg={"primary"}
            textColor={"white"}
            handlePress={onButtonPress}
          />
        </View>
      </View>
    </Modal>
  );
};

export default SuccessModal;
