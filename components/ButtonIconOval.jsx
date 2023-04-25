import { TouchableOpacity, StyleSheet } from "react-native";

export const ButtonIconOval = ({
  onPress,
  icon: Icon,
  iconProps,
  disabled = "false",
  variant = "oval",
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={{ ...getButtonStyle(disabled, variant), ...rest }}
      onPress={onPress}
    >
      <Icon {...iconProps} size={24} color={disabled ? "#BDBDBD" : "#fff"} />
    </TouchableOpacity>
  );
};

// ******************** Styles ********************
// *
const getButtonStyle = (disabled, variant) => {
  const disabledStyle = disabled ? styles.disabled : {};
  const roundStyle = variant === "round" ? styles.round : {};
  return { ...styles.button, ...disabledStyle, ...roundStyle };
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

  round: {
    height: 44,
    width: 44,
  },

  disabled: {
    backgroundColor: "#F6F6F6",
  },
});
