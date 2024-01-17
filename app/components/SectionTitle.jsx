import { Text, TouchableOpacity, View } from "react-native";

const SectionTitle = ({ name }) => {
  return (
    <View className={"flex-row justify-between items-center py-3"}>
      <Text className={"text-xl font-bold"}>{name}</Text>
      <TouchableOpacity className={"p-2"} activeOpacity={0.7}>
        <Text className={"text-[16px] font-medium"}>See all</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SectionTitle;
