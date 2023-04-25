import { View, Image, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { formatDate } from "../helpers";
import { selectUser } from "../redux/auth/authSlice";

export const CommentsItem = ({ commentItem }) => {
  const user = useSelector(selectUser);
  const { uid, avatar, comment, date } = commentItem;

  return (
    <View style={styles.wrap}>
      {user.uid !== uid && (
        <View style={styles.commentWrap}>
          <Image source={{ uri: avatar }} style={styles.avatar} />
          <View style={{ ...styles.textField, borderTopLeftRadius: 0 }}>
            <Text style={styles.comment}>{comment}</Text>
            <Text style={{ ...styles.date, textAlign: "right" }}>
              {formatDate(date)}
            </Text>
          </View>
        </View>
      )}
      {user.uid === uid && (
        <View style={styles.commentWrap}>
          <View style={{ ...styles.textField, borderTopRightRadius: 0 }}>
            <Text style={styles.comment}>{comment}</Text>
            <Text style={{ ...styles.date, textAlign: "left" }}>
              {formatDate(date)}
            </Text>
          </View>
          <Image source={{ uri: avatar }} style={styles.avatar} />
        </View>
      )}
    </View>
  );
};

// ******************** Styles ********************
// *
const styles = StyleSheet.create({
  wrap: {},
  commentWrap: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 24,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 50,
    backgroundColor: "#F6F6F6",
  },
  textField: {
    flex: 2,
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 6,
    // borderTopRightRadius
  },
  comment: {
    marginBottom: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    color: "#212121",
  },
  date: {
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    color: "#BDBDBD",
  },
});
