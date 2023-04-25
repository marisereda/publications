import { View, Image, Text, StyleSheet } from "react-native";

import { ButtonComments } from "./ButtonComments";
import { ButtonLikes } from "./ButtonLikes";
import { ButtonLocation } from "./ButtonLocation";

export const PostListItem = ({
  postItem,
  onPressComments,
  onPressLocation,
}) => {
  return (
    <View style={styles.postWrap}>
      <Image style={styles.photo} source={{ uri: postItem?.photoURL }} />
      <Text style={styles.title}>{postItem?.title}</Text>
      <View style={styles.buttonsWrap}>
        <ButtonComments
          postItem={postItem}
          onPress={() => onPressComments(postItem)}
        />
        <ButtonLikes postItem={postItem} />
        <ButtonLocation
          locationName={postItem?.locationName}
          onPress={() => onPressLocation(postItem)}
        />
      </View>
    </View>
  );
};

// ******************** Styles ********************
// *
const styles = StyleSheet.create({
  postWrap: {
    gap: 8,
    marginBottom: 32,
  },

  photo: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },

  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
  },

  buttonsWrap: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
