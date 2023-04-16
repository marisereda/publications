import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

export const Input = ({
  variant = "outline",
  textContentType,
  placeholder,
  value,
  onChangeText,
  showKeyboard,
  secureTextEntry = false,
  isIcon = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    showKeyboard();
    setIsFocused(true);
  };

  return (
    <TextInput
      textContentType={textContentType}
      autoComplete="off"
      placeholder={placeholder}
      style={{ ...getStyles(variant, isFocused), paddingLeft: isIcon ? 30 : 16 }}
      // style={{ ...styles.input, borderColor: isFocusedInput ? "#FF6C00" : "#E8E8E8" }}
      value={value}
      onFocus={handleFocus}
      onBlur={() => setIsFocused(false)}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};

const getStyles = (variant, isFocused) => {
  const focusedStyle = isFocused ? styles.focused : {};
  return { ...styles[variant], ...focusedStyle };
};

const styles = StyleSheet.create({
  outline: {
    padding: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    // marginBottom: 16,
  },

  focused: {
    backgroundColor: "transparent",
    borderColor: "#FF6C00",
  },

  flushed: {
    padding: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    borderBottomWidth: 1,
    backgroundColor: "transparent",
    borderColor: "#E8E8E8",
  },
  roundOutline: {
    padding: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
  },
});
