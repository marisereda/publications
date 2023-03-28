import { View, Image, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export const PostedPhoto = ({ isLoadedPhoto, loadedPhoto, handleAddingPhoto }) => {
  console.log(isLoadedPhoto);
  return (
    <View style={styles.avatarWrap}>
      <Image src={loadedPhoto ? loadedPhoto.uri : ""} style={styles.photo} />
      <View style={{ ...styles.addButtonWrap, backgroundColor: isLoadedPhoto ? "rgba(255, 255, 255, 0.3)" : "#fff" }}>
        <FontAwesome5.Button
          name="camera"
          size={24}
          iconStyle={{ marginRight: 0 }}
          color={isLoadedPhoto ? "#fff" : "#BDBDBD"}
          style={styles.iconButtonAdd}
          backgroundColor="transparent"
          onPress={handleAddingPhoto}
        ></FontAwesome5.Button>
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
