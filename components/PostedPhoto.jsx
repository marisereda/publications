import { View, Image, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { ButtonIconRound } from "./ButtoIconRound";

export const PostedPhoto = ({ isLoadedPhoto, loadedPhoto, handleAddPhoto }) => {
  console.log(isLoadedPhoto);

  return (
    <View style={styles.avatarWrap}>
      <Image source={{ uri: loadedPhoto }} style={styles.photo} />
      <View style={{ ...styles.addButtonWrap, backgroundColor: isLoadedPhoto ? "rgba(255, 255, 255, 0.3)" : "#fff" }}>
        <ButtonIconRound
          icon={FontAwesome5}
          iconProps={{ name: "camera" }}
          transparent={isLoadedPhoto}
          onPress={handleAddPhoto}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarWrap: {
    // position: "absolute",
    // top: 0,
    // left: "50%",
    // transform: [{ translateX: -50 }, { translateY: -50 }],
  },
  photo: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    marginBottom: 8,
  },
  addButtonWrap: {
    position: "absolute",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    bottom: "50%",
    right: "50%",
    transform: [{ translateX: 30 }, { translateY: 30 }],
    borderRadius: 50,
    // backgroundColor: "#fff",
  },
  iconButtonAdd: {
    // padding: 0,
    borderRadius: 50,
    height: 60,
    width: "100%",
  },
});
