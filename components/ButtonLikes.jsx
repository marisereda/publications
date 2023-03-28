import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const ButtonLikes = ({ likesAmount }) => {
  return (
    <View style={styles.button}>
      <AntDesign.Button
        name="like2"
        size={24}
        iconStyle={{ marginRight: 6 }}
        color="#FF6C00"
        style={""}
        backgroundColor="transparent"
        // onPress={() => navigation.goBack()}
      >
        <Text style={styles.text}>{likesAmount}</Text>
      </AntDesign.Button>
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
