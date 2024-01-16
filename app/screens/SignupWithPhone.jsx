import { View, Text } from "react-native";
import React, { useState, useRef } from "react";
import PhoneInput from "react-native-phone-number-input";
import AppButton from "../components/AppButton";

const SignupWithPhone = ({ navigation }) => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const phoneInput = useRef(null);
  const allowedCountries = ["NG"];
  const handleSignup = () => {
    navigation.navigate("VerifyAccountWithOTPScreen");
  };
  return (
    <View className={"flex-1 justify-center items-center"}>
      <Text className={"text-[24px] font-semibold mb-4"}>
        Enter your number
      </Text>
      <PhoneInput
        ref={phoneInput}
        defaultValue={value}
        defaultCode="NG"
        layout="first"
        onChangeText={(text) => {
          setValue(text);
        }}
        onChangeFormattedText={(text) => {
          setFormattedValue(text);
        }}
        countries={allowedCountries}
        withDarkTheme={false}
        withShadow={false}
        // autoFocus
      />
      <View className={"mt-5 w-[100%]"}>
        <AppButton
          text={"Sign Up"}
          bg={"primary"}
          textColor={"white"}
          handlePress={handleSignup}
        />
      </View>
    </View>
  );
};

export default SignupWithPhone;
