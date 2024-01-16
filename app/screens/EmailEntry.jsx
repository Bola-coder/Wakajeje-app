import { View, Text, TextInput, KeyboardAvoidingView } from "react-native";
import React from "react";
import AppHeader from "../components/AppHeader";
import AppButton from "../components/AppButton";

const EmailEntry = ({ navigation }) => {
  const handleEmailEntry = () => {
    navigation.navigate("NameEntryScreen");
  };
  return (
    <KeyboardAvoidingView className={" bg-white flex-1"}>
      <AppHeader title={"Enter your email"} />
      <View className={"flex-1 justify-between"}>
        <View className={"p-3"}>
          <Text className={"pb-2 font-medium text-xl text-gray-500"}>
            Email
          </Text>
          <TextInput
            keyboardType={"email-address"}
            autoFocus={true}
            className={"p-3 border-2 border-primary rounded-md text-xl"}
          />
        </View>
        <View className={"mb-[10%]"}>
          <AppButton
            text={"Continue"}
            bg={"primary"}
            textColor={"white"}
            handlePress={handleEmailEntry}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default EmailEntry;
