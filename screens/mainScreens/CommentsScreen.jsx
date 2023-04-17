import { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TextInput, Button } from "react-native";
import { ScreenWrap } from "../../components/ScreenWrap";
import { useScreen } from "../../hooks/useScreen";
import { CommentsItem } from "../../components/CommentsItem";
import { Input } from "../../components/Input";
import { ButtonIconOval } from "../../components/ButtonIconOval";
import { Ionicons } from "@expo/vector-icons";

const comments = [
  {
    id: "1",
    avatar: "https://res.cloudinary.com/diaxwbc3c/image/upload/v1681746510/avatars/m74xlpdkudxdemovxxjo.jpg",
    comment:
      "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips! I’ve been trying to capture the same thing for a few months and would love some tips! I’ve been trying to capture the same thing for a few months and would love some tips!I’ve been trying to capture the same thing for a few months and would love some tips!",
    date: "09 June, 2020 | 08:40",
  },
  {
    id: "2",
    avatar: "https://res.cloudinary.com/diaxwbc3c/image/upload/v1681745820/avatars/xsigrmiultlbkfge5yxg.jpg",
    comment:
      "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
    date: "09 June, 2020 | 08:40",
  },
  {
    id: "3",
    avatar: "https://res.cloudinary.com/diaxwbc3c/image/upload/v1681746510/avatars/m74xlpdkudxdemovxxjo.jpg",
    comment: "Thank you! That was very helpful!",
    date: "09 June, 2020 | 08:40",
  },
  {
    id: "4",
    avatar: "https://res.cloudinary.com/diaxwbc3c/image/upload/v1681745820/avatars/xsigrmiultlbkfge5yxg.jpg",
    comment:
      "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips! I’ve been trying to capture the same thing for a few months and would love some tips! I’ve been trying to capture the same thing for a few months and would love some tips!I’ve been trying to capture the same thing for a few months and would love some tips!",
    date: "09 June, 2020 | 08:40",
  },
  {
    id: "5",
    avatar: "https://res.cloudinary.com/diaxwbc3c/image/upload/v1681746510/avatars/m74xlpdkudxdemovxxjo.jpg",
    comment:
      "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
    date: "09 June, 2020 | 08:40",
  },
  {
    id: "6",
    avatar: "https://res.cloudinary.com/diaxwbc3c/image/upload/v1681745820/avatars/xsigrmiultlbkfge5yxg.jpg",
    comment: "Thank you! That was very helpful!",
    date: "09 June, 2020 | 08:40",
  },
];
export const CommentsScreen = ({ route }) => {
  const { photo } = route.params;
  const { screenWidth, isShowKeyboard, hideKeyboard, showKeyboard } = useScreen();
  const [comment, setComment] = useState("");

  const handlePostComment = () => {
    comments.push({ id: comments[comments.length - 1].id + 1, avatar: "", comment, date: Date.now() });
    setComment("");
  };
  return (
    <ScreenWrap hideKeyboard={hideKeyboard}>
      <View style={styles.commentItemWrap}>
        <Image source={{ uri: photo }} style={styles?.photo} />

        <FlatList
          data={comments}
          renderItem={({ item }) => <CommentsItem commentItem={item} />}
          keyExtractor={({ id }) => id}
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
