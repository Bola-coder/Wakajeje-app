import { View, Text, TextInput, KeyboardAvoidingView } from "react-native";
import React from "react";
import AppHeader from "../components/AppHeader";
import AppButton from "../components/AppButton";

const NameEntry = ({ navigation }) => {
  const handleNameEntry = () => {
    navigation.navigate("IDVerificationScreen");
  };
  return (
    <KeyboardAvoidingView className={" bg-white flex-1"}>
      <AppHeader title={"Enter your name"} />
      <View className={"flex-1 justify-between"}>
        <View>
          <View className={"p-3"}>
            <Text className={"pb-2 font-medium text-xl text-gray-500"}>
              First name
            </Text>
            <TextInput
              keyboardType={"default"}
              autoFocus={true}
              placeholder={"John"}
              className={"p-3 border-2 border-primary rounded-md text-xl"}
            />
          </View>
          <View className={"p-3"}>
            <Text className={"pb-2 font-medium text-xl text-gray-500"}>
              Last name
            </Text>
            <TextInput
              keyboardType={"default"}
              placeholder={"Doe"}
              className={"p-3 border-2 border-primary rounded-md text-xl"}
            />
          </View>
        </View>
        <View className={"mb-[10%]"}>
          <AppButton
            text={"Continue"}
            bg={"primary"}
            textColor={"white"}
            handlePress={handleNameEntry}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default NameEntry;
