import { View, Image, Text, StyleSheet } from "react-native";

export const CommentsItem = ({ commentItem }) => {
  const { id: index, avatar, comment, date } = commentItem;
  return (
    <View style={styles.wrap}>
      {index % 2 > 0 && (
        <View style={styles.commentWrap}>
          <Image src={avatar} style={styles.avatar} />
          <View style={styles.textField}>
            <Text style={styles.comment}>{comment}</Text>
            <Text style={{ ...styles.date, textAlign: "right" }}>{date}</Text>
          </View>
        </View>
      )}
      {index % 2 === 0 && (
        <View style={styles.commentWrap}>
          <View style={styles.textField}>
            <Text style={styles.comment}>{comment}</Text>
            <Text style={{ ...styles.date, textAlign: "left" }}>{date}</Text>
          </View>
          <Image src={avatar} style={styles.avatar} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {},
  commentWrap: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 24,

    borderColor: "brown",
    borderWidth: 1,
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
    borderColor: "green",
    borderWidth: 1,
  },
  comment: {
    marginBottom: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    color: "#212121",
    borderColor: "red",
    borderWidth: 1,
  },
  date: {
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    color: "#BDBDBD",
  },
});
