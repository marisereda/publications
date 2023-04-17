import { useState } from "react";
import { Text, ImageBackground, View, FlatList, StyleSheet } from "react-native";
import * as DocumentPicker from "expo-document-picker";

import { useScreen } from "../../hooks/useScreen";
import { useUserGlobal } from "../../globalStore";
import { PostListItem } from "../../components/PostListItem";
import { Avatar } from "../../components/Avatar";
import { ButtonLogOut } from "../../components/ButtonLogOut";

const posts = [
  {
    id: "1",
    photo: "https://res.cloudinary.com/diaxwbc3c/image/upload/v1681745149/cld-sample-2.jpg",
    title: "Forest",
    commentsAmount: "8",
    likesAmount: "42",
    location: "Ukraine",
  },
  {
    id: "2",
    photo: "https://res.cloudinary.com/diaxwbc3c/image/upload/v1681745149/cld-sample-2.jpg",
    title: "Black Sea Sunset",
    commentsAmount: "4",
    likesAmount: "37",
    location: "Ukraine",
  },
  {
    id: "3",
    photo: "https://res.cloudinary.com/diaxwbc3c/image/upload/v1681745149/cld-sample-2.jpg",
    title: "Venice house",
    commentsAmount: "5",
    likesAmount: "58",
    location: "Italy",
  },
];

export const ProfileScreen = ({ navigation }) => {
  const { screenWidth, isShowKeyboard, hideKeyboard, showKeyboard } = useScreen();
  const [user, setUser] = useUserGlobal();
  const [isLoadedAvatar, setIsLoadedAvatar] = useState(user?.loadedAvatar ? true : false);
  const [loadedAvatar, setLoadedAvatar] = useState(user?.loadedAvatar ? user.loadedAvatar : null);

  // -------------- Adding or removing Avatar ---------------
  const handleAddingAvatar = async () => {
    if (!isLoadedAvatar) {
      const res = await DocumentPicker.getDocumentAsync({
        type: "image/*",
        copyToCacheDirectory: true,
      });

      if (res.type !== "success") {
        console.log("File picking failed");
        return;
      }
      setLoadedAvatar(res);
    } else if (isLoadedAvatar) {
      setLoadedAvatar(null);
    }
    setIsLoadedAvatar(!isLoadedAvatar);
  };

  return (
    <ImageBackground source={require("../../assets/images/photo-bg.jpg")} style={styles.backgroundImage}>
      <View style={{ ...styles.form, width: screenWidth }}>
        <Avatar isLoadedAvatar={isLoadedAvatar} loadedAvatar={loadedAvatar} handleAddingAvatar={handleAddingAvatar} />
        <ButtonLogOut style={{ alignSelf: "flex-end", marginBottom: 48 }} />
        <Text style={styles.title}>{user?.name ? user.name : user.email}</Text>
        <FlatList
          data={posts}
          renderItem={({ item }) => <PostListItem postItem={item} onPress={() => navigation.navigate("Comments")} />}
          keyExtractor={({ id }) => id}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    paddingTop: 120,
    alignItems: "flex-end",
  },
  form: {
    height: "95%",
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24,
    paddingBottom: 45,
  },
  title: {
    marginBottom: 32,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    color: "#212121",
    textAlign: "center",
  },
});
