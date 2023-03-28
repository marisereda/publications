import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export const ButtonLocation = ({ location }) => {
  return (
    <View style={styles.button}>
      <Ionicons.Button
        name="location-outline"
        size={24}
        iconStyle={{ marginRight: 4 }}
        color="#BDBDBD"
        style={""}
        backgroundColor="transparent"
        // onPress={() => navigation.goBack()}
      >
        <Text style={styles.text}>{location}</Text>
      </Ionicons.Button>
    </View>
  );
};

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
