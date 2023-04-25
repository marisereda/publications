import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const ButtonSubmit = ({ text, disabled = false, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.buttonSubmit,
        backgroundColor: disabled ? "#F6F6F6" : "#FF6C00",
      }}
      onPress={onPress}
    >
      <Text
        style={{ ...styles.textButton, color: disabled ? "#BDBDBD" : "#fff" }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

// ******************** Styles ********************
// *
const styles = StyleSheet.create({
  buttonSubmit: {
    padding: 16,
    marginTop: 40,
    marginBottom: 120,
    alignItems: "center",
    borderRadius: 50,
  },
  textButton: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
});
