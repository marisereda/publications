import { TouchableOpacity, StyleSheet } from "react-native";
export const ButtonIconRound = ({ onPress, icon: Icon, iconProps, transparent = "false" }) => {
  return (
    <TouchableOpacity style={getButtonStyle(transparent)} onPress={onPress}>
      <Icon {...iconProps} size={24} color={transparent ? "#fff" : "#BDBDBD"} />
    </TouchableOpacity>
  );
};

const getButtonStyle = (transparent) => {
  const transparentStyle = transparent ? styles.transparent : {};
  return { ...styles.button, ...transparentStyle };
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: 60,
    borderRadius: 50,
    // color: "#BDBDBD",
    backgroundColor: "#fff",
  },

  transparent: {
    // color: "#fff",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
});
