import { View, Image, Text, StyleSheet } from "react-native";
import { ButtonComments } from "./ButtonComments";
import { ButtonLikes } from "./ButtonLikes";
import { ButtonLocation } from "./ButtonLocation";

export const PostListItem = ({ postItem, onPressComments, onPressLocation }) => {
  // console.log("🚧 onPressLocation:", onPressLocation);

  return (
    <View style={styles.postWrap}>
      <Image style={styles.photo} source={{ uri: postItem?.photo }} />
      <Text style={styles.title}>{postItem.title}</Text>
      <View style={styles.buttonsWrap}>
        <ButtonComments commentsAmount={postItem.commentsAmount} onPress={() => onPressComments(postItem)} />
        <ButtonLikes likesAmount={postItem.likesAmount} />
        <ButtonLocation location={postItem.location} onPress={() => onPressLocation(postItem)} />
      </View>
    </View>
  );
};

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
