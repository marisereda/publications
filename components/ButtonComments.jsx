import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const ButtonComments = ({ commentsAmount, onPress }) => {
  return (
    <View style={styles.button}>
      <MaterialIcons.Button
        name="messenger"
        size={24}
        iconStyle={{ marginRight: 6 }}
        color="#FF6C00"
        style={""}
        backgroundColor="transparent"
        onPress={onPress}
      >
        <Text style={styles.text}>{commentsAmount}</Text>
      </MaterialIcons.Button>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 24,
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
  },
});
