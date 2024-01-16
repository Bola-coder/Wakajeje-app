import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import React, { useState } from "react";
import AppHeader from "../components/AppHeader";
import AppButton from "../components/AppButton";
import ErrorModal from "../components/ErrorModal";
import SuccessModal from "../components/SuccessModal";

const NINVerification = ({ navigation }) => {
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleErrorModalClose = () => {
    setShowErrorModal(false);
  };

  handleSuccessModalClose = () => {
    setShowSuccessModal(false);
  };

  const handleNINVerification = () => {
    // setShowErrorModal(true);
    setShowSuccessModal(true);
  };
  return (
    <KeyboardAvoidingView
      className={`flex-1 ${showErrorModal && "opacity-70"} ${
        showErrorModal && "bg-gray-400"
      }`}
    >
      <AppHeader title={"Verify your identity"} />
      <View className={"flex-1 justify-between"}>
        <View>
          <View className={"p-3"}>
            <Text className={"pb-2 font-medium text-xl text-gray-500"}>
              NIN Number
            </Text>
            <TextInput
              keyboardType={"numeric"}
              autoFocus={true}
              placeholder={"Enter NIN number to verify"}
              className={"p-3 border-2 border-primary rounded-md text-xl"}
            />
          </View>
          <View className={"items-center mt-5"}>
            <Image
              source={require("./../../assets/images/NinImage.png")}
              className={"w-[100%"}
            />
          </View>
        </View>
        <View className={"mb-[10%]"}>
          <AppButton
            text={"Verify Identity"}
            bg={"primary"}
            textColor={"white"}
            handlePress={handleNINVerification}
          />
        </View>
        <ErrorModal
          isVisible={showErrorModal}
          onClose={handleErrorModalClose}
          title={"Failed to verify your details"}
          message={
            "Let your provided first and last name match with the details you have with NIN"
          }
          primaryButtonText={"Update Details"}
          secondaryButtonText={"Use Other Verification Method"}
          showSecondaryButton={true}
          onPrimaryButtonPress={() => navigation.navigate("NameEntryScreen")}
          onSecondaryButtonPress={() =>
            navigation.navigate("IDVerificationScreen")
          }
        />
        <SuccessModal
          isVisible={showSuccessModal}
          title={"NIN Verified"}
          onClose={handleSuccessModalClose}
          message={"Your NIN Details has been Captured and Verified"}
          buttonText={"Continue to Home"}
          onButtonPress={() => navigation.navigate("HomeScreen")}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default NINVerification;
