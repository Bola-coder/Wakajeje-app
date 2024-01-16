import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { OtpInput } from "react-native-otp-entry";
import AppButton from "../components/AppButton";

const VerifyAccount = ({ navigation }) => {
  const handleVerifyAccount = () => {
    navigation.navigate("SetupProfileScreen");
  };
  return (
    <View className={" bg-white flex-1 pt-[15%]"}>
      <Text className={"text-[36px] font-bold text-left ml-5"}>
        Verify Account
      </Text>
      <Text className={"text-[16px] font-medium text-left ml-5 mt-3"}>
        Enter the code sent to your mail or phone number.
      </Text>
      <View className={"w-[80%] mx-auto"}>
        <OtpInput
          numberOfDigits={4}
          focusColor={"#00B5B5"}
          //   autoFocus={false}
          onTextChange={(text) => console.log(text)}
          onFilled={(text) => console.log(`OTP is ${text}`)}
          theme={{
            containerStyle: styles.container,
            // inputsContainerStyle: styles.inputContainer,
            pinCodeContainerStyle: styles.pinCode,
          }}
        />
      </View>
      <View className={"mt-[15%]"}>
        <AppButton
          text={"Verify"}
          bg={"primary"}
          textColor={"white"}
          handlePress={handleVerifyAccount}
        />
        <Text className={"text-center text-xl mt-5"}>
          I didn’t receive a code!{" "}
          <Text className={"text-primary"}>Resend.</Text>
        </Text>
      </View>
    </View>
  );
};

export default VerifyAccount;

const styles = StyleSheet.create({
  container: {
    marginTop: "15%",
  },
  inputContainer: {
    borderColor: "red",
    backgroundColor: "yellow",
  },
  pinCode: {
    width: "22%",
    borderRadius: 8,
    backgroundColor: "#E0E0E0",
  },
});
