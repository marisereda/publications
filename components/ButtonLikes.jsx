import { AntDesign } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { mutateData } from "../helpers";
import { selectUser } from "../redux/auth/authSlice";

export const ButtonLikes = ({ postItem }) => {
  const user = useSelector(selectUser);
  const isLiked = postItem.likes.includes(user.uid);

  // ******************** Handle Like button click ********************
  // *
  const handleLikeClick = async () => {
    let likes = [];
    if (isLiked) {
      likes = postItem.likes.filter((item) => item !== user.uid);
    } else {
      likes = [...postItem.likes, user.uid];
    }
    await mutateData("posts", postItem.id, { likes });
  };

  return (
    <View style={styles.button}>
      <AntDesign.Button
        name={isLiked ? "like1" : "like2"}
        size={24}
        iconStyle={{ marginRight: 6 }}
        color="#FF6C00"
        style=""
        backgroundColor="transparent"
        onPress={handleLikeClick}
      >
        <Text style={styles.text}>{postItem.likes.length}</Text>
      </AntDesign.Button>
    </View>
  );
};

// ******************** Styles ********************
// *
const styles = StyleSheet.create({
  button: {
    marginRight: 24,
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
  },
});
