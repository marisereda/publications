import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

export const Input = ({ textContentType, placeholder, value, onChangeText, showKeyboard, secureTextEntry = false }) => {
  const [isFocusedInput, setIsFocusedInput] = useState(false);

  const handleFocusedInput = () => {
    showKeyboard(true);
    setIsFocusedInput(true);
  };

  return (
    <TextInput
      textContentType={textContentType}
      autoComplete="off"
      placeholder={placeholder}
      style={{ ...styles.input, borderColor: isFocusedInput ? "#FF6C00" : "#E8E8E8" }}
      value={value}
      onFocus={handleFocusedInput}
      onBlur={() => setIsFocusedInput(false)}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
  },
});
