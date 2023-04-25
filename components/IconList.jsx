import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";

export const IconList = ({ focused }) => {
  return (
    <View
      style={{
        padding: 8,
        flexDirection: "row",
        flexWrap: "wrap",
        width: 40,
        height: 40,
        gap: 0,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MaterialIcons
        name="crop-square"
        size={11}
        color={focused ? "#FF6C00" : "#212121"}
      />
      <MaterialIcons
        name="crop-square"
        size={11}
        color={focused ? "#FF6C00" : "#212121"}
      />
      <MaterialIcons
        name="crop-square"
        size={11}
        color={focused ? "#FF6C00" : "#212121"}
      />
      <MaterialIcons
        name="crop-square"
        size={11}
        color={focused ? "#FF6C00" : "#212121"}
      />
    </View>
  );
};
