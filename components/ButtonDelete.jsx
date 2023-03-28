import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const ButtonDelete = ({ isDisabled = true }) => {
  const handlePress = () => {
    if (isDisabled) {
      return;
    }
  };

  return (
    // <View styles={styles.tabBar}>
    <View style={{ ...styles.iconWrap, backgroundColor: isDisabled ? "#F6F6F6" : "#FF6C00" }}>
      <AntDesign.Button
        name="delete"
        size={24}
        iconStyle={{ marginRight: 0 }}
        color={isDisabled ? "#BDBDBD" : "#fff"}
        style={""}
        backgroundColor="transparent"
        onPress={handlePress}
      ></AntDesign.Button>
    </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  // tabBar: {
  //   padding: 9,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  iconWrap: {
    // padding: 8,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 70,
    borderRadius: 50,
    marginTop: "auto",

    // backgroundColor: "#F6F6F6",
  },
});
