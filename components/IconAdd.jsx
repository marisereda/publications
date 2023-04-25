import { Feather } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

export const IconAdd = () => {
  return (
    <View style={styles.iconWrap}>
      <Feather name="plus" size={24} color="#fff" />
    </View>
  );
};

// ******************** Styles ********************
// *
const styles = StyleSheet.create({
  iconWrap: {
    padding: 8,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 70,
    borderRadius: 50,
    backgroundColor: "#FF6C00",
  },
});
