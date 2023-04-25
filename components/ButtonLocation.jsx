import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";

export const ButtonLocation = ({ locationName, onPress }) => {
  return (
    <View style={styles.button}>
      <Ionicons.Button
        name="location-outline"
        size={24}
        iconStyle={{ marginRight: 4 }}
        color="#BDBDBD"
        style=""
        backgroundColor="transparent"
        onPress={onPress}
      >
        <Text style={styles.text}>{locationName}</Text>
      </Ionicons.Button>
    </View>
  );
};

// ******************** Styles ********************
// *
const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    // marginleft: "auto",
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
  },
});
