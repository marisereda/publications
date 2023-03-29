import { TouchableOpacity, StyleSheet } from "react-native";

export const ButtonIconOval = ({ onPress, icon: Icon, iconProps, disabled = "false" }) => {
  // console.log("disabled", disabled, opaciable);
  return (
    <TouchableOpacity style={getButtonStyle(disabled)} onPress={onPress}>
      <Icon {...iconProps} size={24} color={disabled ? "#BDBDBD" : "#fff"} />
    </TouchableOpacity>
  );
};

const getButtonStyle = (disabled) => {
  const disabledStyle = disabled ? styles.disabled : {};
  return { ...styles.button, ...disabledStyle };
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 70,
    backgroundColor: "#FF6C00",
    borderRadius: 50,
  },

  disabled: {
    backgroundColor: "#F6F6F6",
  },
});
