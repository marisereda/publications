import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

import { Input } from "./Input";

export const InputLocation = ({
  textContentType,
  placeholder,
  value,
  onChangeText,
  isPasswordSecured,
  showKeyboard,
  variant = "outline",
}) => {
  return (
    <View>
      <Input
        variant={variant}
        textContentType={textContentType}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        showKeyboard={showKeyboard}
        isIcon={true}
      />
      <View style={styles.iconWrap}>
        <Ionicons
          name="location-outline"
          size={24}
          color="#BDBDBD"
          style={styles.iconButton}
          backgroundColor="transparent"
        />
      </View>
    </View>
  );
};

// ******************** Styles ********************
// *
const styles = StyleSheet.create({
  iconWrap: {
    position: "absolute",
    justifyContent: "center",
    top: 0,
    left: 0,
    height: "100%",
  },

  iconButton: {
    padding: 0,
    margin: 0,
  },
});
