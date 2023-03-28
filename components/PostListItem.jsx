import { View, Image, Text, StyleSheet } from "react-native";
import { ButtonComments } from "./ButtonComments";
import { ButtonLikes } from "./ButtonLikes";
import { ButtonLocation } from "./ButtonLocation";
export const PostListItem = ({ postItem }) => {
  // console.log(postItem.photo);
  return (
    <View style={styles.postWrap}>
      <Image
        style={styles.photo}
        // source={"https://drive.google.com/file/d/1hUgV0C6hVGOA4cKiMGw6FIuolIvqliif/view?usp=sharing"}
        // src={postItem.photo}
        src={"https://drive.google.com/file/d/1hUgV0C6hVGOA4cKiMGw6FIuolIvqliif/view?usp=sharing"}
      />
      <Text style={styles.title}>{postItem.title}</Text>
      <View style={styles.buttonsWrap}>
        <ButtonComments commentsAmount={postItem.commentsAmount} />
        <ButtonLikes likesAmount={postItem.likesAmount} />
        <ButtonLocation location={postItem.location} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postWrap: {
    // flSex: 1,
    // flexDirection: "row",
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
    // gap: 0,
    alignItems: "center",
    justifyContent: "flex-start",
    // borderWidth: 1,
    // borderColor: "green",
  },
});
