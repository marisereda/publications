import { View, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const Avatar = ({ isLoadedAvatar, loadedAvatar, handleAddingAvatar }) => {
  return (
    <View style={styles.avatarWrap}>
      <Image src={loadedAvatar ? loadedAvatar.uri : ""} style={styles.avatarImage} />
      <View style={styles.addButtonWrap}>
        <Ionicons.Button
          name={isLoadedAvatar ? "close-circle-outline" : "add-circle-outline"}
          size={36}
          iconStyle={{ marginRight: 0 }}
          color="#FF6C00"
          style={styles.iconButtonAdd}
          backgroundColor="transparent"
          onPress={handleAddingAvatar}
        ></Ionicons.Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarWrap: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
  avatarImage: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addButtonWrap: {
    position: "absolute",
    bottom: 0,
    right: 0,
    transform: [{ translateX: 20 }, { translateY: -20 }],
  },
  iconButtonAdd: {
    padding: 0,
    borderRadius: 50,
  },
});
