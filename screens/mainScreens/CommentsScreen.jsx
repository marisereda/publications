import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";
import { useSelector } from "react-redux";

import {
  ButtonIconOval,
  CommentsItem,
  Input,
  ScreenWrap,
} from "../../components";
import { mutateData } from "../../helpers";
import { usePosts, useScreen } from "../../hooks";
import { selectUser } from "../../redux/auth/authSlice";

export const CommentsScreen = ({ route }) => {
  const { hideKeyboard, showKeyboard } = useScreen();
  const [comment, setComment] = useState("");
  const { uid, avatar } = useSelector(selectUser);
  const posts = usePosts();
  const postItem = route.params;
  const post = posts?.find((item) => item.id === postItem.id);
  const refreshedComments = post?.comments;

  // ******************** Comment posting ********************
  // *
  const handlePostComment = () => {
    const comments = [
      ...refreshedComments,
      { uid, avatar, date: Date.now(), comment },
    ];
    mutateData("posts", postItem.id, { comments });
    setComment("");
  };

  // ******************** Mark up ********************
  // *
  return (
    <ScreenWrap hideKeyboard={hideKeyboard}>
      <View style={styles.commentItemWrap}>
        <Image source={{ uri: post?.photoURL }} style={styles.photo} />

        <FlatList
          data={refreshedComments}
          renderItem={({ item }) => <CommentsItem commentItem={item} />}
          keyExtractor={(item) => item.date}
        />

        <View style={styles.inputWrap}>
          <Input
            variant="roundOutline"
            textContentType="none"
            placeholder="Comment"
            value={comment}
            onChangeText={setComment}
            showKeyboard={showKeyboard}
          />
          <View style={styles.buttonWrap}>
            <ButtonIconOval
              icon={Ionicons}
              iconProps={{ name: "arrow-up" }}
              disabled={!comment}
              onPress={handlePostComment}
              variant="round"
            />
          </View>
        </View>
      </View>
    </ScreenWrap>
  );
};

// ******************** Styles ********************
// *
const styles = StyleSheet.create({
  commentItemWrap: {
    height: "100%",
  },

  photo: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    marginBottom: 32,
  },

  inputWrap: {
    marginTop: 30,
  },

  buttonWrap: {
    justifyContent: "center",
    position: "absolute",
    top: 0,
    right: 10,
    height: "100%",
  },
});
