import { View, Image, Text, StyleSheet } from "react-native";

export const PostAuthor = ({ avatar, name, email }) => {
  return (
    <View style={styles.postWrap}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={styles.textWrap}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};

// ******************** Styles ********************
// *
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
  },

  textWrap: {
    flex: 1,
    gap: 0,
    justifyContent: "center",
  },

  name: {
    fontFamily: "Roboto-Medium",
    fontSize: 13,
    color: "#212121",
  },

  email: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    color: "#212121",
  },
});
