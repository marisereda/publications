import { Input } from "./Input";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const SecuredInput = ({
  textContentType,
  placeholder,
  value,
  onChangeText,
  onPress,
  isPasswordSecured,
  showKeyboard,
}) => {
  return (
    <View>
      <Input
        textContentType={textContentType}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        showKeyboard={showKeyboard}
        secureTextEntry={isPasswordSecured}
      />
      <View style={styles.passwordWrap}>
        <Ionicons.Button
          name={isPasswordSecured ? "eye-off" : "eye"}
          size={24}
          iconStyle={{ marginRight: 0 }}
          color="#FF6C00"
          style={styles.iconButton}
          backgroundColor="transparent"
          onPress={() => onPress(!isPasswordSecured)}
        ></Ionicons.Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordWrap: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
  },
  iconButton: {
    height: "100%",
    padding: 10,
    margin: 0,
  },
});
