import { View, Text, TextInput, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import AppHeader from "../components/AppHeader";
import AppButton from "../components/AppButton";
import ErrorModal from "../components/ErrorModal";
import SuccessModal from "../components/SuccessModal";
import AppDatePicker from "../components/AppDatePicker";
const BVNVerification = ({ navigation }) => {
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleErrorModalClose = () => {
    setShowErrorModal(false);
  };

  handleSuccessModalClose = () => {
    setShowSuccessModal(false);
  };

  const handleBVNVerification = () => {
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
              BVN Number
            </Text>
            <TextInput
              keyboardType={"numeric"}
              autoFocus={true}
              placeholder={"Enter NIN number to verify"}
              className={"p-3 border-2 border-primary rounded-md text-xl"}
            />
          </View>
          <View className={"p-3"}>
            <Text className={"pb-2 font-medium text-xl text-gray-500"}>
              Date of Birth
            </Text>
            <AppDatePicker
              label={"Dat eof Birth"}
              //   styles={styles}
              onDateChange={(value) => setDob(value)}
            />
          </View>
        </View>
        <View className={"mb-[10%]"}>
          <AppButton
            text={"Verify Identity"}
            bg={"primary"}
            textColor={"white"}
            handlePress={handleBVNVerification}
          />
        </View>
        <ErrorModal
          isVisible={showErrorModal}
          onClose={handleErrorModalClose}
          title={"Failed to verify your details"}
          message={
            "Let your provided first and last name match with the details you have with BVN"
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
          title={"BVN Verified"}
          onClose={handleSuccessModalClose}
          message={"Your NIN Details has been Captured and Verified"}
          buttonText={"Continue to Home"}
          onButtonPress={() => navigation.navigate("HomeScreen")}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default BVNVerification;
