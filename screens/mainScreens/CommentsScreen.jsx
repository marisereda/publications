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
    avatar: "https://drive.google.com/file/d/1hUgV0C6hVGOA4cKiMGw6FIuolIvqliif/view?usp=sharing",
    comment:
      "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips! I’ve been trying to capture the same thing for a few months and would love some tips! I’ve been trying to capture the same thing for a few months and would love some tips!I’ve been trying to capture the same thing for a few months and would love some tips!",
    date: "09 June, 2020 | 08:40",
  },
  {
    id: "2",
    avatar: "https://drive.google.com/file/d/1hUgV0C6hVGOA4cKiMGw6FIuolIvqliif/view?usp=sharing",
    comment:
      "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
    date: "09 June, 2020 | 08:40",
  },
  {
    id: "3",
    avatar: "https://drive.google.com/file/d/1hUgV0C6hVGOA4cKiMGw6FIuolIvqliif/view?usp=sharing",
    comment: "Thank you! That was very helpful!",
    date: "09 June, 2020 | 08:40",
  },
  {
    id: "4",
    avatar: "https://drive.google.com/file/d/1hUgV0C6hVGOA4cKiMGw6FIuolIvqliif/view?usp=sharing",
    comment:
      "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips! I’ve been trying to capture the same thing for a few months and would love some tips! I’ve been trying to capture the same thing for a few months and would love some tips!I’ve been trying to capture the same thing for a few months and would love some tips!",
    date: "09 June, 2020 | 08:40",
  },
  {
    id: "5",
    avatar: "https://drive.google.com/file/d/1hUgV0C6hVGOA4cKiMGw6FIuolIvqliif/view?usp=sharing",
    comment:
      "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
    date: "09 June, 2020 | 08:40",
  },
  {
    id: "6",
    avatar: "https://drive.google.com/file/d/1hUgV0C6hVGOA4cKiMGw6FIuolIvqliif/view?usp=sharing",
    comment: "Thank you! That was very helpful!",
    date: "09 June, 2020 | 08:40",
  },
];
export const CommentsScreen = () => {
  const { screenWidth, isShowKeyboard, hideKeyboard, showKeyboard } = useScreen();
  const [comment, setComment] = useState("");

  const handlePostComment = () => {
    comments.push({ id: comments[comments.length - 1].id + 1, avatar: "", comment, date: Date.now() });
    setComment("");
  };
  return (
    <ScreenWrap hideKeyboard={hideKeyboard}>
      <View style={styles.commentItemWrap}>
        <Image src={""} style={styles?.photo} />

        <FlatList
          data={comments}
          renderItem={({ item }) => <CommentsItem commentItem={item} />}
          keyExtractor={({ id }) => id}
          // ListFooterComponent={
          //   <View>
          //     <Input
          //       variant="roundOutline"
          //       textContentType="none"
          //       placeholder="Comment"
          //       value={comment}
          //       onChangeText={setComment}
          //       showKeyboard={showKeyboard}
          //     />
          //     <ButtonIconOval
          //       icon={Ionicons}
          //       iconProps={{ name: "arrow-up" }}
          //       disabled={!comment}
          //       onPress={handlePostComment}
          //       style={{ height: 34, width: 34 }}
          //     />
          //   </View>
          // }
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
    // flex: 1,
    // flexBasis: 100,
    // flexGrow: 0,
    // paddingBottom: 32,
    borderWidth: 1,
    borderColor: "green",
  },

  photo: {
    // flexGrow: 0,

    // flex: 1,
    width: "100%",
    height: 240,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    marginBottom: 32,
  },

  inputWrap: {
    // position: "absolute",
    // flexGrow: 0,
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
