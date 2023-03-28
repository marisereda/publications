import { Input } from "./Input";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const InputLocation = ({
  textContentType,
  placeholder,
  value,
  onChangeText,
  onPress,
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
        // secureTextEntry={isPasswordSecured}
      />
      <View style={styles.iconWrap}>
        <Ionicons
          name="location-outline"
          size={24}
          // iconStyle={{ marginRight: 0 }}
          color="#BDBDBD"
          style={styles.iconButton}
          backgroundColor="transparent"
          // onPress={() => onPress(!isPasswordSecured)}
        ></Ionicons>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconWrap: {
    position: "absolute",
    // flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    top: 0,
    left: 0,
    height: "100%",
    // borderWidth: 1,
    // borderColor: "green",
  },
  iconButton: {
    // height: "100%",
    // alignSelf: "center",
    padding: 0,
    margin: 0,
    // borderWidth: 1,
    // borderColor: "green",
  },
});
