import DateTimePicker from "@react-native-community/datetimepicker";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

const AppDatePicker = ({ label, defaultValue, onDateChange }) => {
  // Function to format the date
  const formatDate = (date) => {
    if (date) {
      date = new Date(date);
      const day = date.getDate(); // Get the day of the month (1-31)
      const month = date.getMonth() + 1; // Get the month (0-11), add 1 to get the actual month (1-12)
      const year = date.getFullYear();
      return `${year}-${month}-${day}`;
    }
    return date;
  };

  // State Variables
  const currDate = Date.now();
  const [date, setDate] = useState(new Date(currDate));
  // console.log(formatDate(defaultValue));
  const [formatedDate, setFormattedDate] = useState(formatDate(defaultValue));
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    setFormattedDate(formatDate(currentDate));
    onDateChange(selectedDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  //   useEffect(() => {

  //   }, [date]);

  return (
    <SafeAreaView>
      <TouchableOpacity
        className={
          " flex-row justify-between items-center p-5 my-1 border-2 border-primary rounded-md text-xl"
        }
        onPress={showDatepicker}
      >
        <Text>
          {label}: {formatedDate}
        </Text>
        <View>
          <FontAwesome name="calendar" size={24} color="#00B5B5" />
        </View>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          is24Hour={true}
          onChange={onChange}
          disabled={true}
        />
      )}
    </SafeAreaView>
  );
};

export default AppDatePicker;
