import { View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

export const IconUser = ({ focused }) => {
  return (
    <View
      style={{
        padding: 8,
        alignSelf: "center",
        // borderColor: focused ? "green" : "red",
        // borderWidth: 1,
      }}
    >
      <Feather name="user" size={24} color={focused ? "#FF6C00" : "#212121"} />
    </View>
  );
};
