import { Feather } from "@expo/vector-icons";
import { View } from "react-native";

export const IconUser = ({ focused }) => {
  return (
    <View
      style={{
        padding: 8,
        alignSelf: "center",
      }}
    >
      <Feather name="user" size={24} color={focused ? "#FF6C00" : "#212121"} />
    </View>
  );
};
