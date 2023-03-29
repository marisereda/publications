import { View, Image, Text, StyleSheet } from "react-native";

export const PostAuthor = ({ avatar, name, email }) => {
  return (
    <View style={styles.postWrap}>
      <Image src={avatar?.uri} style={styles.avatar} />
      <View style={styles.textWrap}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postWrap: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 32,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,

    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#BDBDBD",
    // shadow: "#000",
  },
  textWrap: {
    flex: 1,
    gap: 0,
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "green",
  },
  name: {
    fontFamily: "Roboto-Medium",
    fontSize: 13,
    // lineHeight: 1.15,
    color: "#212121",
    // borderWidth: 1,
    // borderColor: "green",
  },
  email: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    // lineHeight: 1.19,
    color: "#212121",
    // borderWidth: 1,
    // borderColor: "green",
  },
});
